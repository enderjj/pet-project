/**
 * 用于获取要变换的属性的当前值，用来获取的是 <style> 中定义的属性
 * @param {Object} obj 变换对象
 * @param {String} attr 变换的属性
 */
function getStyle(obj, attr) {
  if (obj.currentStyle) { // IE中获取的方式
    return obj.currentStyle[attr];
  } else { // 非IE中获取的方式
    return getComputedStyle(obj, false)[attr];
  }
}

/**
 * 变换框架
 * @param {Object} obj 
 * @param {Number} target 
 * @param {String} attribute 
 */
function startChange(obj, target, attribute) {
  clearInterval(obj.timer);

  var current = 0;

  obj.timer = setInterval(function () {
    if (attribute === 'opacity') {
      current = Math.round(parseFloat(getStyle(obj, attribute)) * 100);
    } else {
      current = parseInt(getStyle(obj, attribute));
    }
    var speed = (target - current) / 4;

    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (current === target) {
      clearInterval(obj.timer);
    } else {
      if (attribute === 'opacity') {
        obj.style.filter = 'opacity(' + (current + speed) + ')';
        obj.style[attribute] = (current + speed) / 100;
      }
      obj.style[attribute] = current + speed + 'px';
    }
  }, 30);
}
