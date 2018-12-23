window.onload = function () {
  waterfall('myDiv', 'imgBox');

  var jsonObject = {
    data: [
      {
        src: '0.jpg'
      },
      {
        src: '1.jpg'
      },
      {
        src: '2.jpg'
      },
      {
        src: '3.jpg'
      },
      {
        src: '4.jpg'
      }
    ]
  };

  // 页面滚动时，动态渲染页面元素
  window.onscroll = function () {
    if (checkScroll()) {
      var divElement = document.getElementById('myDiv');

      // 新增元素并渲染
      for (var i = 0; i < jsonObject.data.length; i++) {
        var boxElement = document.createElement('div');
        boxElement.className = 'imgBox';
        divElement.appendChild(boxElement);
        var imgBoxElement = document.createElement('div');
        imgBoxElement.className = 'img';
        boxElement.appendChild(imgBoxElement);
        var imgElement = document.createElement('img');
        imgElement.src = 'images/' + jsonObject.data[i].src;
        imgBoxElement.appendChild(imgElement);
      }

      waterfall('myDiv', 'imgBox');
    }
  }
}

function waterfall(objParent, objBox) {
  var oParent = document.getElementById(objParent);
  var oBoxs = getByClass(oParent, objBox);
  // console.log(oBoxs.length);
  // 计算图片在页面中显示的列数（窗口的宽度 / objBox 的宽度）
  var objBoxWidth = oBoxs[0].offsetWidth;    // objBox 的宽度
  var objParentWidth = document.documentElement.clientWidth;   // 窗口的宽度
  var col = Math.floor(objParentWidth / objBoxWidth);     // 列数
  console.log(col);
  oParent.style.cssText = 'width:' + objBoxWidth * col + 'px; margin:0 auto';

  var colHeights = [];   // 用于存放每列的高度

  for (var i = 0; i < oBoxs.length; i++) {
    if (i < col) {     // 初始高度为第一行每个元素的高度
      colHeights[i] = oBoxs[i].offsetHeight;
    } else {
      var minHeight = Math.min.apply(null, colHeights); // colHeight 数组的最小值
      var minIndex = getIndexMin(colHeights, minHeight);    // 获取最小值的索引值

      oBoxs[i].style.position = 'absolute';    // 设置元素定位方式为绝对定位
      oBoxs[i].style.top = minHeight + 'px';
      oBoxs[i].style.left = oBoxs[minIndex].offsetLeft + 'px';
      colHeights[minIndex] += oBoxs[i].offsetHeight;      // 更新新增元素列的高度
    }
  }
}

/**
 * 获取父元素myDiv下所有class为imgBox的元素
 * @param {String} oParent 
 * @param {String} oBox
 * @returns {Array} 
 */
function getByClass(oParent, oBox) {
  var childs = oParent.getElementsByTagName('*');   // 获取父元素oParent下的所有子元素
  var boxs = [];

  for (var i = 0; i < childs.length; i++) {
    var child = childs[i];

    if (child.className == oBox) {  // 如果子元素的class名为objBox，就将子元素放入boxs中
      boxs.push(child);
    }
  }

  return boxs;
}

// 获取元素在数组中的索引值
function getIndexMin(array, minValue) {
  for (var i in array) {
    if (array[i] === minValue) {
      return i;
    }
  }
}

// 判断页面是否滚动指定距离
function checkScroll() {
  var objParent = document.getElementById('myDiv');
  var objBoxs = getByClass(objParent, 'imgBox');
  // 最后一个元素距离页面顶部的距离+元素的一般距离
  var lastBoxScroll = objBoxs[objBoxs.length - 1].offsetTop + Math.floor(objBoxs[objBoxs.length - 1].offsetHeight / 2);
  var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
  var windowHeight = document.body.clientHeight || document.documentElement.clientHeight;
  return (lastBoxScroll <= scrollHeight + windowHeight) ? true : false;
}