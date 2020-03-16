

$(document).ready(function() {
    
    $("#button").click(function() {
        
        var classname = $("#button").attr('class');

        if(classname == 'button-off'){

            $("#button").attr('class', 'button');
        }
        else{

            $("#button").attr('class', 'button-off');
        }
        
    });
    
});

function changeRed() {
  document.getElementById("background").style.backgroundColor = "red";
}
function changeOrange() {
  document.getElementById("background").style.backgroundColor = "orange";
}
function changePurple() {
  document.getElementById("background").style.backgroundColor = "purple";
}