window.onload = function () {
  var moveElements = document.getElementsByTagName('div');

  for (var i = 0; i < moveElements.length; i++) {
    moveElements[i].timer = null; // 在每个运动的物体上加一个定时器

    moveElements[i].onmousemove = function () {
      startMove(500, this);
    }

    moveElements[i].onmouseout = function () {
      startMove(100, this);
    }
  }
}

// var timer = null; // 定时器

/**
 * 
 * @param {Number} target 停止条件
 * @param {Object} obj 运动物体
 */
function startMove(target, obj) {
  clearInterval(obj.timer);

  obj.timer = setInterval(function () {
    var currentOffsetWidth = obj.offsetWidth;
    var speed = (target - currentOffsetWidth) / 6;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (currentOffsetWidth === target) {
      clearInterval(obj.timer);
    } else {
      obj.style.width = currentOffsetWidth + speed + 'px';
    }

  }, 30);
}
