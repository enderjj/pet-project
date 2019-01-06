window.onload = function () {
  var startButton = document.getElementById('start-move');

  startButton.onclick = function () {
    startMove();
  }
}

var timer = null; // 定时器
var speed = 0; // 速度
var target = 600; // 终点

function startMove() {
  var moveElement = document.getElementById('move-element'); // 获取要移动的元素

  clearInterval(timer);

  timer = setInterval(function () {
    var currentOffsetLeft = moveElement.offsetLeft;

    if (currentOffsetLeft == target) {
      clearInterval(timer);
    } else {
      speed = (target - currentOffsetLeft) / 10;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); // 速度取整

      moveElement.style.left = currentOffsetLeft + speed + 'px'; // 设置新 left 值
    }
  }, 30);
}