window.onload = function() {
  var chainMove = document.getElementById('chain-move');

  chainMove.onmouseover = function() { // 鼠标移入事件
    startChange(this, 400, 'width', function() {
      startChange(chainMove, 400, 'height', function() {
        startChange(chainMove, 100, 'opacity');
      });
    });
  }

  chainMove.onmouseout = function() { // 鼠标移出事件
      startChange(chainMove, 30, 'opacity', function() {
        startChange(chainMove, 200, 'height', function() {
          startChange(chainMove, 200, 'width');
        });
      });
  }

}
