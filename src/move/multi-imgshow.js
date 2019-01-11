window.onload = function () {
  var images = document.getElementsByTagName('div');

  for (var i = 0; i < images.length; i++) {
    images[i].opacity = 30; // 给每个图片定义一个透明度属性
    images[i].timer = null; // 给每个图片定义一个定时器

    images[i].onmouseover = function () {
      startShow(100, this);
    }

    images[i].onmouseout = function () {
      startShow(30, this);
    }
  }
}

function startShow(target, obj) {
  clearInterval(obj.timer); // 清除当前对象的定时器

  obj.timer = setInterval(function () {

    var speed = (target - obj.opacity) / 4;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (obj.opacity === target) { // 如果透明度达到目标值了，就停止变换透明度
      clearInterval(obj.timer);
      // obj.style.filter = 'opacity(' + target + ')';
      // obj.style.opacity = target / 100;
    } else { // 如果透明度未达到目标值，就变换透明度
      obj.opacity += speed;
      obj.style.filter = 'opacity(' + obj.opacity + ')';
      obj.style.opacity = obj.opacity / 100;
    }

  }, 30);
}
