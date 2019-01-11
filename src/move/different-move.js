window.onload = function () {
  var changeHeight = document.getElementById('change-height');
  var changeWidth = document.getElementById('change-width');
  // var iTarget1 = 600; // 停止条件

  changeHeight.timer = null;
  changeWidth.timer = null;

  changeHeight.onmouseover = function () {
    startChange(this, 600, 'height');
  }

  changeHeight.onmouseout = function () {
    startChange(this, 200, 'height');
  }

  changeWidth.onmouseover = function () {
    startChange(this, 600, 'width');
  }

  changeWidth.onmouseout = function () {
    startChange(this, 200, 'width');
  }

}

/**
 * 用于获取要变换的属性的当前值
 * @param {Object} obj 变换对象
 * @param {String} attr 变换的属性
 */
function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
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

  obj.timer = setInterval(function () {
    var current = parseInt(getStyle(obj, attribute));
    var speed = (target - current) / 4;

    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (current === target) {
      clearInterval(obj.timer);
    } else {
      obj.style[attribute] = current + speed + 'px';
    }
  }, 30);
}
