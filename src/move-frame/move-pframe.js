/**
 * 用于获取要变换的属性的当前值，获取的是 <style> 中定义的属性
 * @param {Object} obj 变换对象
 * @param {String} attr 变换的属性
 */
function getStyle(obj, attr) {
  if (obj.currentStyle) { // IE 中获取的方式
    return obj.currentStyle[attr];
  } else { // 非 IE 中获取的方式
    return getComputedStyle(obj, false)[attr];
  }
}

/**
 * 变换框架
 * @param {Object} obj 运动对象
 * @param {json} json 保存多个需要变换的属性
 * @param {function} functionEndExecute 运动结束时执行的函数
 */
function startChange(obj, json, functionEndExecute, division) {
  division = division || 4;

  if (typeof obj !== 'object') {
    throw new Error('Expected the obj to be an object');
  }

  if (obj.timer) {
    clearInterval(obj.timer);
  }

  var current = 0;

  obj.timer = setInterval(function () {
    var stopFlag = true; // 是否所有属性都运动到终点位置，初始假设是

    for (var attribute in json) {
      if (attribute === 'opacity') {
        current = Math.round(parseFloat(getStyle(obj, attribute)) * 100);
      } else {
        current = parseInt(getStyle(obj, attribute));
      }

      var speed = (json[attribute] - current) / division;

      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      if (current !== json[attribute]) { // 只要有一个没到终点，就设置 stopFlag 为 false
        stopFlag = false;
      }

      if (attribute === 'opacity') {
        obj.style.filter = 'opacity(' + (current + speed) + ')';
        obj.style[attribute] = (current + speed) / 100;
      } else {
        obj.style[attribute] = current + speed + 'px';
      }
    }

    if (stopFlag) {
      clearInterval(obj.timer);

      if (functionEndExecute) { // 如果有传入函数，则在运动结束时调用函数
        functionEndExecute();
      }
    }

  }, 30);
}
