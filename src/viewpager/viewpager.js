window.onload = function () {
  var container = document.getElementById('container');   //获取最外层容器
  var imgList = document.getElementById('page-list');   //获取图片列表
  // var pageButton = document.getElementById('page-button');
  var spans = document.getElementById('page-button').getElementsByTagName('span');   //获取所有的span标签
  var prev = document.getElementById('prev');  //获取左箭头
  var next = document.getElementById('next');  //获取右箭头

  imgList.style.left = '-4800px';   //设置图片列表的left特性

  var index = 0;   //保存当前亮显的span标签索引值

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

  //设置轮播点亮显
  function showButton() {

    //将现在亮显的按钮置灰
    for (var i = 0; i < spans.length; i++) {
      var spanClassName = spans[i].className;
      if (spanClassName === 'on') {
        spans[i].className = '';
        break;
      }
    }

    //设置新的亮显按钮
    spans[index].className = 'on';
  }

  //第三种实现方式
  function clickEvent(offset) {
    var newLeft = parseInt(imgList.style.left) + offset;   //求出新的left值

    //如果newLeft值为最后一张图的附图，就更新newLeft值为最后一张图
    if (newLeft > -800) {
      newLeft = -4800;
    }

    //如果newLeft值为第一张图的附图，就更新newLeft值为第一张图
    if (newLeft < -4800) {
      newLeft = -800;
    }

    imgList.style.left = newLeft + 'px';     //更新图片的left值
  }

  //添加右箭头点击事件
  next.onclick = function () {

    //设置按钮轮播
    if (index === 5) {
      index = 0;
    } else {
      index += 1;
    }

    showButton();   //调用亮显事件
    clickEvent(800);
  }

  //添加左箭头点击事件
  prev.onclick = function () {
    if (index === 0) {
      index = 5;
    } else {
      index -= 1;
    }

    showButton();  //调用亮显事件
    clickEvent(-800);
  }

  //按钮点击事件
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      if (this.className === 'on') {
        return;
      }
      var thisIndex = this.getAttribute('index');
      var indexOffset = parseInt(800 * (thisIndex - index - 1));
      clickEvent(indexOffset);
      index = thisIndex - 1;
      showButton();
      // debugger;
    }
  }
}