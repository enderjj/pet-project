window.onscroll = function () {
  var scrollElement = document.getElementById('scroll-element');
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  scrollElement.style.top = (document.documentElement.clientHeight - scrollElement.offsetHeight) / 2;
}