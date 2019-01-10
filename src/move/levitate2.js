window.onscroll = function () {
  var scrollElement = document.getElementById('scroll-element');
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // scrollElement.style.top = (document.documentElement.clientHeight - scrollElement.offsetHeight) / 2 + scrollTop + 'px';
  startScroll(parseInt((document.documentElement.clientHeight - scrollElement.clientHeight) / 2) + scrollTop);
}

var timer = null; // 定时器

function startScroll(target) {
  clearInterval(timer);

  var scrollEle = document.getElementById('scroll-element');
  var scrollPx = document.getElementById('scroll-px');

  timer = setInterval(function () {
    var currentOffsetTop = scrollEle.offsetTop; // 把元素当前的 offsetTop 取出来
    var speed = (target - currentOffsetTop) / 4;

    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (currentOffsetTop === target) {
      clearInterval(timer);
    } else {
      scrollPx.value = currentOffsetTop;
      scrollEle.style.top = currentOffsetTop + speed + 'px';
    }
  }, 30);
}
