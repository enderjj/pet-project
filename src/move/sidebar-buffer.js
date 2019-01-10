window.onload = function () {
  var shareSidebar = document.getElementById('sidebar');

  shareSidebar.onmouseover = function () {
    startMove(0);
  }

  shareSidebar.onmouseout = function () {
    startMove(-150);
  }
}

var timer = null; // 定时器
var speed = 0; // 速度

function startMove(target) {
  clearInterval(timer);

  timer = setInterval(function () {
    var sidebar = document.getElementById('sidebar');
    var currentOffsetLeft = sidebar.offsetLeft; // 获取当前的位置

    speed = (target - currentOffsetLeft) / 4; // 缓冲速度
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (currentOffsetLeft == target) {
      clearInterval(timer);
    } else {
      sidebar.style.left = currentOffsetLeft + speed + 'px';
    }
  }, 30);

}
