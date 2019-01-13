window.onload = function () {
  var prevhalf = document.getElementsByClassName('prevhalf')[0];
  var nexthalf = document.getElementsByClassName('nexthalf')[0];
  var prevButton = document.getElementsByClassName('prev')[0]; // 左箭头
  var nextButton = document.getElementsByClassName('next')[0]; // 右箭头
  var bigPic = document.getElementsByClassName('big-pic')[0]; // 大图片区域
  var bigPics = bigPic.getElementsByTagName('li'); // 大图片
  var smallPicDiv = document.getElementsByClassName('small-div')[0]; // 小图片区域
  var smallPic = document.getElementsByClassName('small-pic')[0]; // 小图片 ul
  var smallPics = smallPic.getElementsByTagName('li'); // 小图片

  var currentZIndex = 2; // 当前显示图片的 z-index 值
  var currentIndex = 0; // 当前图片的索引

  prevButton.onmouseover = prevhalf.onmouseover = function () {
    startChange(prevButton, 60, 'opacity');
  }

  prevButton.onmouseout = prevhalf.onmouseout = function () {
    startChange(prevButton, 0, 'opacity');
  }

  nextButton.onmouseover = nexthalf.onmouseover = function () {
    startChange(nextButton, 60, 'opacity');
  }

  nextButton.onmouseout = nexthalf.onmouseout = function () {
    startChange(nextButton, 0, 'opacity');
  }

  /**
   * 小图片变化
   */
  function tab() {
    /**
     * 滚动小图片
     */
    if (currentIndex === smallPics.length - 1) {
      // smallPic.style.left = currentLeft;
      startChange(smallPic, -(195 * (currentIndex - 2)), 'left');
    } else if (currentIndex === 0) {
      // smallPic.style.left = 0;
      startChange(smallPic, 0, 'left');
    } else {
      // smallPic.style.left = -(195 * (currentIndex - 1)) + 'px';
      startChange(smallPic, -(195 * (currentIndex - 1)), 'left');
    }

    /**
     * 设置小图片的透明度
     */
    for (var i = 0; i < smallPics.length; i++) {
      smallPics[i].style.opacity = 0.6;
      smallPics[i].style.filter = 'opacity(60)';
    }
    startChange(smallPics[currentIndex], 100, 'opacity');
  }

  prevButton.onclick = function () {
    currentIndex--; //图片索引为下一张图片
    if (currentIndex === -1) {
      currentIndex = bigPics.length - 1;
    }
    bigPics[currentIndex].style.zIndex = currentZIndex++; // 设置图片的 z-index 值
    bigPics[currentIndex].style.height = 0; // 设置图片的初始高度为 0
    startChange(bigPics[currentIndex], 400, 'height'); // 通过运动显示图片

    tab(); // 小图片运动
  }

  nextButton.onclick = function () { // 右箭头点击事件
    currentIndex++; //图片索引为下一张图片
    if (currentIndex === bigPics.length) { // 如果显示到最后一张图片，则下一张图片为第一张图片
      currentIndex = 0;
    }
    bigPics[currentIndex].style.zIndex = currentZIndex++; // 设置图片的 z-index 值
    bigPics[currentIndex].style.height = 0; // 设置图片的初始高度为 0
    startChange(bigPics[currentIndex], 400, 'height'); // 通过运动显示图片

    tab(); // 小图片运动
  }
}
