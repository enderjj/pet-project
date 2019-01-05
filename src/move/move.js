var stopLeft = 300; // 设置停止位置
var speed = 10; // 设置移动速度

window.onload = function () {
  var moveElement = document.getElementById('moveContainer'); // 获取要移动的元素
  var startMove = document.getElementById('start-move'); // 获取按钮元素
  var timer = null; // 设置定时器

  // 定义移动函数
  function move() {
    clearInterval(timer); // 移动前先清楚定时器

    timer = setInterval(function () { // 重新设置定时器
      if (moveElement.offsetLeft >= stopLeft) {
        clearInterval(timer); // 如果到达停止位置，则清楚定时器
      } else {
        moveElement.style.left = moveElement.offsetLeft + speed + 'px'; // 每次移动speed距离
      }
    }, 30);
  }

  startMove.addEventListener('click', move, false); // 添加 onclick 时间处理程序

}