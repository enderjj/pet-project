window.onload = function() {
  var moveToThree = document.getElementById('start-move1');
  var moveToSix = document.getElementById('start-move2');
  var targetThree = document.getElementById('move-target1');
  var targetSix = document.getElementById('move-target2');
  
  moveToThree.onclick = function() {
    startMove(targetThree.offsetLeft);
  }

  moveToSix.onclick = function() {
    startMove(targetSix.offsetLeft);
  }
}

var timer = null; // 定时器
var speed = 0; // 速度

function startMove(target) {
  clearInterval(timer);

  var moveElement = document.getElementById('moveContainer'); // 获取要移动的元素

  timer = setInterval(function() {
    var currentOffsetLeft = moveElement.offsetLeft;

    if(currentOffsetLeft < target) {
      speed = 7;
    }else {
      speed = -7;
    }

    moveElement.style.left = currentOffsetLeft + speed + 'px';
  }, 30);


}
