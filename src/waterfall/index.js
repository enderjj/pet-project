window.onload = function () {
  waterfall('myDiv', 'imgBox');
}

function waterfall(objParent, objBox) {
  var oParent = document.getElementById(objParent);
  var oBoxs = getByClass(oParent, objBox);
  // console.log(oBoxs.length);
  // 计算图片在页面中显示的列数（窗口的宽度/objBox的宽度）
  var objBoxWidth = oBoxs[0].offsetWidth;    //objBox的宽度
  var objParentWidth = document.documentElement.clientWidth;   //窗口的宽度
  var col = Math.floor(objParentWidth / objBoxWidth);     //列数
  console.log(col);
  oParent.style.cssText = 'width:' + objBoxWidth * col + 'px; margin:0 auto';

  var colHeights = new Array();   // 用于存放每列的高度
  for (var i = 0; i < oBoxs.length; i++) {
    if (i < col) {     // 初始高度为第一行每个元素的高度
      colHeights[i] = oBoxs[i].offsetHeight;
    } else {
      var minHeight = Math.min.apply(Math, colHeights);    // colHeight数组的最小值
      var minIndex = getIndexMin(colHeights, minHeight);    // 获取最小值的索引值
      oBoxs[i].style.position = 'absolute';    // 设置元素定位方式为绝对定位
      oBoxs[i].style.top = minHeight + 'px';
      oBoxs[i].style.left = oBoxs[minIndex].offsetLeft + 'px';
      colHeights[minIndex] += oBoxs[i].offsetHeight;      // 更新新增元素列的高度
    }
  }
}

// 获取父元素myDiv下所有class为imgBox的元素
function getByClass(oParent, oBox) {
  var childs = oParent.getElementsByTagName('*');   // 获取父元素oParent下的所有子元素
  var boxs = new Array();

  for (var i = 0; i < childs.length; i++) {
    if (childs[i].className == oBox) {       // 如果子元素的class名为objBox，就将子元素放入boxs中
      boxs.push(childs[i]);
    }
  }

  return boxs;
}

// 获取元素在数组中的索引值
function getIndexMin(array, minValue) {
  for (var i in array) {
    if (array[i] == minValue) {
      return i;
    }
  }
}