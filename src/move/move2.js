window.onload = function () {
  var moveToThree = document.getElementById('start-move1');
  var moveToSix = document.getElementById('start-move2');
  var targetThree = document.getElementById('move-target1');
  var targetSix = document.getElementById('move-target2');

  moveToThree.onclick = function () {
    startMove(targetThree.offsetLeft);
  }

  moveToSix.onclick = function () {
    startMove(targetSix.offsetLeft);
  }
}

var timer = null; // 定时器
var speed = 0; // 速度

function startMove(target) {
  clearInterval(timer);

  var moveElement = document.getElementById('moveContainer'); // 获取要移动的元素

  timer = setInterval(function () {
    var currentOffsetLeft = moveElement.offsetLeft;

    if (currentOffsetLeft < target) {
      speed = 7;
    } else {
      speed = -7;
    }

    if (Math.abs(target - currentOffsetLeft) < 7) { // 如果当前位置距离目标足够近（这里小于速度），就停止运动，并设置当前位置为目标位置
      clearInterval(timer);
      moveElement.style.left = target + 'px';
    } else {
      moveElement.style.left = currentOffsetLeft + speed + 'px';
    }

  }, 30);

}
