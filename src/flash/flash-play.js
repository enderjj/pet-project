window.onload = function() {
  var prevhalf = document.getElementsByClassName('prevhalf')[0];
  var nexthalf = document.getElementsByClassName('nexthalf')[0];
  var prevButton = document.getElementsByClassName('prev')[0];
  var nextButton = document.getElementsByClassName('next')[0];

  prevButton.onmouseover = prevhalf.onmouseover = function() {
    startChange(prevButton, 60, 'opacity');
  }

  prevButton.onmouseout = prevhalf.onmouseout = function() {
    startChange(prevButton, 0, 'opacity');
  }

  nextButton.onmouseover = nexthalf.onmouseover = function() {
    startChange(nextButton, 60, 'opacity');
  }

  nextButton.onmouseout = nexthalf.onmouseout = function() {
    startChange(nextButton, 0, 'opacity');
  }

  prevButton.onclick = function() {
    
  }
}
