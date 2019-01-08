window.onscroll = function () {
  var scrollElement = document.getElementById('scroll-element'); // 获取要滚动的元素
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 兼容设置

  // scrollElement.style.top = document.documentElement.clientHeight - scrollElement.offsetHeight + scrollTop + 'px';
  startScroll(document.documentElement.clientHeight - scrollElement.offsetHeight + scrollTop);
}

var timer = null; // 定时器
// var speed = 0;

function startScroll(target) {
  clearInterval(timer);

  var scrollEle = document.getElementById('scroll-element');

  timer = setInterval(function () {
    var currentOffsetTop = scrollEle.offsetTop;
    var speed = (target - currentOffsetTop) / 2;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (currentOffsetTop == target) {
      clearInterval(timer);
    } else {
      scrollEle.style.top = currentOffsetTop + speed + 'px';
    }
  }, 30);
}