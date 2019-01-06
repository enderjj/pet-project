window.onload = function () {
  var imageDiv = document.getElementById('image');

  imageDiv.onmouseover = function () {
    changeOpacity(100);
  }

  imageDiv.onmouseout = function () {
    changeOpacity(30);
  }
}

var timer = null; // 设置定时器
var currentOpacity = 30; // 当前透明度
var speed = 0; // 变换速度

function changeOpacity(target) {
  clearInterval(timer); // 清楚定时器 

  var imageDiv = document.getElementById('image');

  // 设置变换速度
  if (currentOpacity < target) {
    speed = 10;
  } else {
    speed = -10;
  }

  timer = setInterval(function () {
    if (currentOpacity == target) {
      clearInterval(timer);
    } else {
      currentOpacity += speed;
      imageDiv.style.filter = 'opacity:(' + currentOpacity + ')';
      imageDiv.style.opacity = currentOpacity / 100;
    }
  }, 30);
}