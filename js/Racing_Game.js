var i = 0

function hitKey() {
//when player hits key: move fwd 1 until end is reached
  if (i < 4) {
     $(".active").removeClass("active").next().addClass("active");
     i = i+1;
  }
  else{
      alert("player 1 wins!");   
    
  }
} 

function play() {
  // when play pressed, clear board and start in cell 1 
  $("table td").removeClass("active");
  $("table td:first-child").addClass("active");
  i=0;
}

$(document).ready(function() {
  //attach listeners
  $(".play").click(play);
  $(document).keypress(hitKey);


});


