

$(document).ready(function() {
    
    $("#button").click(function() {
        
        var classname = $("#button").attr('class');

        if(classname == 'button-on'){

            $("#button").attr('class', 'button');
            $(document.getElementById("background").style.backgroundColor= "#8a8a8aff");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor= "#8d8d8d");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor= "#8d8d8d");
            $(document.getElementById("speaker-power").style.borderColor= "gray");
            
        }
        else{

            $("#button").attr('class', 'button-on');
            $(document.getElementById("background").style.backgroundColor= "orange");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor= "orange");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor= "orange");
            $(document.getElementById("speaker-power").style.borderColor= "rgb(36, 199, 40)");
        }
        
    });
    
});

function changeRed() {
    document.getElementById("background").style.backgroundColor = "red";
    document.getElementById("speaker-small-color-changer").style.backgroundColor= "red";
    document.getElementById("speaker-big-color-changer").style.backgroundColor= "red";

};
function changeBlue() {
    document.getElementById("background").style.backgroundColor = "blue";
    document.getElementById("speaker-small-color-changer").style.backgroundColor= "blue";
    document.getElementById("speaker-big-color-changer").style.backgroundColor= "blue";
}
function changeGreen() {
    document.getElementById("background").style.backgroundColor = "green"
    document.getElementById("speaker-small-color-changer").style.backgroundColor= "green";
    document.getElementById("speaker-big-color-changer").style.backgroundColor= "green";
}

$(document).on('click', '#speaker-top', function() {
    $(this).addClass('screen-top-zoom').removeClass('screen-top');
    $(this).siblings().addClass('speaker-box-hide').removeClass('speaker-box-show');
    
});

