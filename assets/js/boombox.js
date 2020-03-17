

$(document).ready(function() {
    
    $("#button").click(function() {
        
        var classname = $("#button").attr('class');

        if(classname == 'button-on'){

            $("#button").attr('class', 'button');
            $(document.getElementById("background").style.backgroundColor= "#8a8a8aff");

        }
        else{

            $("#button").attr('class', 'button-on');
            $(document.getElementById("background").style.backgroundColor= "orange");
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


