

function hitKey() {
//when player presses key move fwd 1 until end is reached
  alert('key pressed')
} 

function play() {
  // when play pressed, clear board and start in cell 1
  $("table td:first-child").css("background-color", "red");
}

$(document).ready(function() {
  //attach listeners
  $(".play").click(play);
  $("hitKey").keypress();


});