var i = 1;
var x = 1;
var tracksize = 10;

function hitKey(e) {


//when player hits key: move fwd 1 until end is reached
  if (e.which == '97') { 
    if (i < tracksize) {
       $("#player1 .active").removeClass("active").next().addClass("active");
       i = i+1;
    }
    else {
      if (x<tracksize) {
        alert("player 1 wins!");  
      }
    }
  }

else if (e.which == '108') { 
    if (x < tracksize) {
       $("#player2 .active").removeClass("active").next().addClass("active");
       x = x+1;
    }
    else {
      if (i < tracksize) {
        alert("player 2 wins!");  
      }
    }
  }










} 

function play() {
  // when play pressed, clear board and start in cell 1 
  $("table td").removeClass("active");
  $("table td:first-child").addClass("active");
  i=1;
  x=1;
}

$(document).ready(function() {
  //attach listeners
  $(".play").click(play);
  $(document).keypress(hitKey);


});


