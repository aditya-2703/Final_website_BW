var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
// console.log( cellWidth, cellHeight );

document.addEventListener( 'keydown', function(e) {
  switch(e.keyCode){
      case 37:
          selectedIndex--;
          rotateCarousel();
          break
      case 39:
          selectedIndex++;
          rotateCarousel();

  }
});


window.onload = function() {
onOrientationChange();

}

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}






function changeCarousel() {
  cellCount = 14;
  theta = 360 / cellCount;
  var cellSize = cellWidth;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

function onOrientationChange() {
  // var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  isHorizontal = true;
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}
