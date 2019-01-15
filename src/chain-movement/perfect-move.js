window.onload = function () {
  var moveButton = document.getElementById('move-btn');
  var moveElement = document.getElementById('perfect-move');

  var jsonAttr = {
    "width": 400,
    "height": 400,
    'opacity': 100,
    'left': 400
  }

  moveButton.addEventListener('click', function () {
    startChange(moveElement, jsonAttr);
  });
}
