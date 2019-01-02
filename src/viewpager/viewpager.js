window.onload = function () {
  var container = document.getElementById('container');   //获取最外层容器
  var imgList = document.getElementById('page-list');   //获取图片列表
  // var pageButton = document.getElementById('page-button');
  var spans = document.getElementById('page-button').getElementsByTagName('span');   //获取所有的span标签
  var prev = document.getElementById('prev');  //获取左箭头
  var next = document.getElementById('next');  //获取右箭头

  imgList.style.left = 0;

  //第一种实现方式
  // next.onclick = function () {
  //   imgList.style.left = parseInt(imgList.style.left) + 800 + 'px';
  // }

  // prev.onclick = function () {
  //   imgList.style.left = parseInt(imgList.style.left) - 800 + 'px';
  // }

  //第二种实现方式
  // function clickArrow() {
  //   // var offsetLeft = parseInt(imgList.style.left);
  //   // imgList.style.left = offsetLeft + offset + 'px';
  //   if (event.target == next) {
  //     imgList.style.left = parseInt(imgList.style.left) + 800 + 'px';
  //   } else {
  //     imgList.style.left = parseInt(imgList.style.left) - 800 + 'px';
  //   }
  // }

  // next.addEventListener('click', clickArrow, false);
  // prev.addEventListener('click', clickArrow, false);

  //第三种实现方式
  function clickEvent(offset) {
    imgList.style.left = parseInt(imgList.style.left) + offset + 'px';     //offset为偏移量
  }

  //添加右箭头点击事件
  next.onclick = function () {
    clickEvent(800);
  }

  //添加左箭头点击事件
  prev.onclick = function () {
    clickEvent(-800);
  }
}