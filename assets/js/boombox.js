
/*----------------------------IOS Switch Background ----------------- */
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
        else {

            $("#button").attr('class', 'button-on');
            $(document.getElementById("background").style.backgroundColor= "orange");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor= "orange");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor= "orange");
            $(document.getElementById("speaker-power").style.borderColor= "orange");
            
        }
        
    });
    
});
/*----------------------------IOS Switch Screen ----------------- */
$(document).ready(function() {
    
    $("#screen-button").click(function() {
        
        var classname = $("#screen-button").attr('class');

        if(classname == 'screen-button-on'){

            $("#screen-button").attr('class', 'screen-button');
            $(document.getElementById("volume-box").style.borderColor= "#8a8a8aff");
            $(document.getElementById("volume-box").style.borderColor= "#8a8a8aff");
        }
        else {

            $("#screen-button").attr('class', 'screen-button-on');
            $(document.getElementById("volume-box").style.borderColor= "orange");
        }
        
    });
    
});


/*----------------------------IOS Switch Screen ----------------- */
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
/*----------------------------Screen Zoom Effect ----------------- */
$(document).on('click', '#speaker-top', function() {
    $(this).addClass('screen-top-zoom').removeClass('screen-top');
    $(this).find('#screen-switch').addClass('light-switch-screen-bg').removeClass('light-switch-screen-hide');
    $(this).find('#volume-box').addClass('volume-box').removeClass('volume-box-hide');
    $(this).children().addClass('inner-screen-area').removeClass('inner-screen-area-hide');
    $(this).siblings().addClass('speaker-box-hide').removeClass('speaker-box-show');
    
    
});

