window.onload = function () {
  var leftBackdrop = document.getElementsByClassName('left-backdrop')[0];
  var rightBackdrop = document.getElementsByClassName('right-backdrop')[0];
  var prevButton = document.getElementsByClassName('prev-btn')[0]; // 左箭头
  var nextButton = document.getElementsByClassName('next-btn')[0]; // 右箭头
  var largePicWrapper = document.getElementsByClassName('large-pic')[0]; // 大图片区域
  var largePics = largePicWrapper.getElementsByTagName('li'); // 大图片
  var smallPicWrapper = document.getElementsByClassName('small-pic')[0]; // 小图片 ul
  var smallPics = smallPicWrapper.getElementsByTagName('li'); // 小图片
  var dotWrapper = document.getElementsByClassName('dot-wrapper')[0]; // span 圆点
  var dots = dotWrapper.getElementsByTagName('span');

  var currentZIndex = 2; // 当前显示图片的 z-index 值
  var currentIndex = 0; // 当前图片的索引
  var THUMBNAIL_WIDTH = smallPics[0].offsetWidth + 15; // 小图片宽度
  var currentOpacityIndex = 0; // 当前量显图片的索引

  prevButton.onmouseover = leftBackdrop.onmouseover = function () {
    startChange(prevButton, 60, 'opacity');
  }

  prevButton.onmouseout = leftBackdrop.onmouseout = function () {
    startChange(prevButton, 0, 'opacity');
  }

  nextButton.onmouseover = rightBackdrop.onmouseover = function () {
    startChange(nextButton, 60, 'opacity');
  }

  nextButton.onmouseout = rightBackdrop.onmouseout = function () {
    startChange(nextButton, 0, 'opacity');
  }

  /**
   * 图片变化
   */
  function thumbnailMove() {
    largePics[currentIndex].style.zIndex = currentZIndex++; // 设置大图片的 z-index 值
    largePics[currentIndex].style.height = 0; // 设置大图片的初始高度为 0
    startChange(largePics[currentIndex], 400, 'height'); // 通过运动显示图片

    // 设置小图片的透明度
    // for (var i = 0; i < smallPics.length; i++) {
    //   startChange(smallPics[i], 60, 'opacity');
    // }
    startChange(smallPics[currentOpacityIndex], 60, 'opacity');
    startChange(smallPics[currentIndex], 100, 'opacity');

    // 滚动小图片
    if (currentIndex === smallPics.length - 1) {
      startChange(smallPicWrapper, -(THUMBNAIL_WIDTH * (currentIndex - 2)), 'left');
    } else if (currentIndex === 0) {
      startChange(smallPicWrapper, 0, 'left');
    } else {
      startChange(smallPicWrapper, -(THUMBNAIL_WIDTH * (currentIndex - 1)), 'left');
    }

    // 设置圆点颜色
    // for (var i = 0; i < dots.length; i++) {
    //   // startChange(dots[i], 60, 'opacity');
    //   dots[i].style.backgroundColor = '#000';
    // }
    dots[currentOpacityIndex].style.backgroundColor = '#000';
    dots[currentIndex].style.backgroundColor = '#fff';
    // startChange(dots[currentIndex], 100, 'opacity');
    currentOpacityIndex = currentIndex;

  }

  prevButton.onclick = function () { // 左箭头点击事件
    currentIndex--; // 图片索引为下一张图片

    if (currentIndex === -1) {
      currentIndex = largePics.length - 1;
    }

    thumbnailMove(); // 图片运动
  }

  nextButton.onclick = function () { // 右箭头点击事件
    currentIndex++; // 图片索引为下一张图片

    // 如果显示到最后一张图片，则下一张图片为第一张图片
    if (currentIndex === largePics.length) {
      currentIndex = 0;
    }

    thumbnailMove(); // 小图片运动
  }


  // 设置小图片事件
  for (var i = 0; i < smallPics.length; i++) {
    smallPics[i].index = i;
    dots[i].index = i;

    smallPics[i].onmouseover = function () {
      startChange(this, 100, 'opacity');
    }

    smallPics[i].onmouseout = function () {
      if (this.index !== currentIndex) {
        startChange(this, 60, 'opacity');
      }
    }

    smallPics[i].onclick = function () {
      if (currentIndex === this.index) {
        return;
      }
      currentIndex = this.index;
      thumbnailMove();
    }
  }


  dotWrapper.onclick = function (e) {
    var currentDot = e.target

    if (currentIndex === currentDot.index) {
      return;
    }
    currentIndex = currentDot.index;
    thumbnailMove();
  }
}
