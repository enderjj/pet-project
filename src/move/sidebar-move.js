
window, onload = function () {
  var sidebar = document.getElementById('sidebar');

  sidebar.onmouseover = function () { // 鼠标移入事件
    startMove(0);
  };

  sidebar.onmouseout = function () { // 鼠标移出事件
    startMove(-150);
  };
}

var timer = null; // 定义定时器

function startMove(stopTarget) {
  clearInterval(timer); // 清楚定时器

  var sidebar = document.getElementById('sidebar');
  var speed = 0; // 移动速度
  // var currentLeft = sidebar.offsetLeft;
  if (sidebar.offsetLeft < stopTarget) {
    speed = 10;
  } else {
    speed = -10;
  }

  timer = setInterval(function () { // 设置定时器
    if (sidebar.offsetLeft == stopTarget) { // 如果到达目标则清除定时器
      clearInterval(timer);
    } else {
      sidebar.style.left = sidebar.offsetLeft + speed + 'px';
    }
  }, 30);
}