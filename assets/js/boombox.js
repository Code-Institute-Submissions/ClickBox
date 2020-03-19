
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
            $(document.getElementById("speaker-power").style.borderColor= "#00ff00");
            
        }
        
    });
    
});
/*----------------------------IOS Switch Screen ----------------- */
$(document).ready(function() {
    
    $("#screen-button").click(function() {
        
        var classname = $("#screen-button").attr('class');

        if(classname == 'screen-button-on'){

            $("#screen-button").attr('class', 'screen-button');
            $("#screen-switch").attr('class', 'light-switch-screen-bg');
            $(document.getElementById("volume-box").style.borderColor= "#8a8a8aff");
            $(document.getElementById("volume-bar").style.backgroundColor= "#8a8a8aff");
            $("#screen-top-up").attr('class', 'screen-top-up');
            $("#screen-bottom-up").attr('class', 'screen-bottom-up');
        }
        else {

            $("#screen-button").attr('class', 'screen-button-on');
            $("#screen-switch").attr('class', 'light-switch-screen-bg-on');
            $(document.getElementById("volume-box").style.borderColor= "orange");
            $(document.getElementById("volume-bar").style.backgroundColor= "orange");
            $("#screen-top-up").attr('class', 'screen-top-down');
            $("#screen-bottom-up").attr('class', 'screen-bottom-down');
        }   
        
    });
    
});


/*----------------------------color Switch Screen ----------------- */
function changeRed() {
    document.getElementById("background").style.backgroundColor = "red";
    document.getElementById("volume-box").style.borderColor= "red";
    document.getElementById("speaker-small-color-changer").style.backgroundColor= "red";
    document.getElementById("speaker-big-color-changer").style.backgroundColor= "red";
    document.getElementById("volume-bar").style.backgroundColor= "red";

};
function changeBlue() {
    document.getElementById("background").style.backgroundColor = "blue";
    document.getElementById("volume-box").style.borderColor= "blue";
    document.getElementById("speaker-small-color-changer").style.backgroundColor= "blue";
    document.getElementById("speaker-big-color-changer").style.backgroundColor= "blue";
    document.getElementById("volume-bar").style.backgroundColor= "blue";
}
function changeGreen() {
    document.getElementById("background").style.backgroundColor = "green"
    document.getElementById("volume-box").style.borderColor= "green";
    document.getElementById("speaker-small-color-changer").style.backgroundColor= "green";
    document.getElementById("speaker-big-color-changer").style.backgroundColor= "green";
    document.getElementById("volume-bar").style.backgroundColor= "green";
}
/*----------------------------Screen Zoom Effect ----------------- */
$(document).on('click', '#speaker-top', function() {
    $(this).addClass('screen-top-zoom').removeClass('screen-top');
    $(this).find('#screen-switch').addClass('light-switch-screen-bg').removeClass('light-switch-screen-hide');
    $(this).find('#volume-box').addClass('volume-box').removeClass('volume-box-hide');
    $(this).children().addClass('inner-screen-area').removeClass('inner-screen-area-hide');
    $(this).siblings().addClass('speaker-box-hide').removeClass('speaker-box-show');
    $(this).find('#welcome').removeClass('welcome-hide').addClass('welcome-show');
    
    
});

/*----------------------------Screen Zoom out ----------------- */
$(document).on('click', '#background', function() {
    $('#speaker-top').removeClass('screen-top-zoom').addClass('screen-top');
    $('#speaker-box').removeClass('speaker-box-hide').addClass('speaker-box-show');
    $('#volume-box').addClass('volume-box-hide').removeClass('volume-box');
    $('#welcome').removeClass('welcome-show').addClass('welcome-hide');
});

