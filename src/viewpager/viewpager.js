window.onload = function () {
  var container = document.getElementById('container');   //获取最外层容器
  var imgList = document.getElementById('page-list');   //获取图片列表
  // var pageButton = document.getElementById('page-button');
  var spans = document.getElementById('page-button').getElementsByTagName('span');   //获取所有的span标签
  var prev = document.getElementById('prev');  //获取左箭头
  var next = document.getElementById('next');  //获取右箭头

  imgList.style.left = '-4800px';   //设置图片列表的left特性

  var index = 0;   //保存当前亮显的span标签索引值

  var onShow = false; // 用来标志是否在动画中

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

    var allTime = 300; //动画总时间
    var interval = 10; //动画间隔时间
    var everyOffset = offset / (allTime / interval); //每次位移量


    // 定义内部函数动态显示图片
    function showFunction() {

      // 如果满足动画条件，就动画显示图片
      if ((everyOffset < 0 && parseInt(imgList.style.left) > newLeft) || (everyOffset > 0 && (parseInt(imgList.style.left) < newLeft))) {
        imgList.style.left = parseInt(imgList.style.left) + everyOffset + 'px';
        setTimeout(showFunction, interval);
      }
      else {
        //如果newLeft值为最后一张图的附图，就更新newLeft值为最后一张图
        if (newLeft > -800) {
          newLeft = -4800;
        }
        //如果newLeft值为第一张图的附图，就更新newLeft值为第一张图
        if (newLeft < -4800) {
          newLeft = -800;
        }
        imgList.style.left = newLeft + 'px';
      }
    }

    showFunction();
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
    if (!onShow) {   // 如果不在动画中，就调用点击事件
      clickEvent(800);
    }
  }

  //添加左箭头点击事件
  prev.onclick = function () {
    if (index === 0) {
      index = 5;
    } else {
      index -= 1;
    }

    showButton();  //调用亮显事件
    if (!onShow) {   // 如果不在动画中，就调用点击事件
      clickEvent(-800);
    }
  }

  //按钮点击事件
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      if (this.className === 'on') {
        return;
      }
      var thisIndex = this.getAttribute('index');
      var indexOffset = parseInt(800 * (thisIndex - index - 1));
      if (!onShow) {   // 如果不在动画中，就调用点击事件
        clickEvent(indexOffset);
      }
      // clickEvent(indexOffset);
      index = thisIndex - 1;
      showButton();
      // debugger;
    }
  }
}