
/*----------------------------IOS Switch Background ----------------- */
$(document).ready(function () {

    $("#button").click(function () {

        var classname = $("#button").attr('class');

        if (classname == 'button-on') {

            $("#button").attr('class', 'button');
            $(document.getElementById("background").style.backgroundColor = "#8a8a8aff");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor = "#8d8d8d");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor = "#8d8d8d");
            $(document.getElementById("speaker-power").style.borderColor = "gray");

        }
        else {

            $("#button").attr('class', 'button-on');
            $(document.getElementById("background").style.backgroundColor = "orange");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor = "orange");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor = "orange");
            $(document.getElementById("speaker-power").style.borderColor = "#00ff00");

        }

    });

});
/*----------------------------IOS Switch Screen ----------------- */
$(document).ready(function () {

    $("#screen-button").click(function () {

        var classname = $("#screen-button").attr('class');

        if (classname == 'screen-button-on') {

            $("#screen-button").attr('class', 'screen-button');
            $("#screen-switch").attr('class', 'light-switch-screen-bg');
            $(document.getElementById("volume-box").style.borderColor = "#8a8a8aff");
            $(document.getElementById("volume-bar").style.backgroundColor = "#8a8a8aff");
            $("#screen-top-up").attr('class', 'screen-top-up');
            $("#screen-bottom-up").attr('class', 'screen-bottom-up');
            $("#welcome").text("BYE");
            $("#welcome-intro1").attr('class', 'welcome-triangle-hide');
            $("#welcome-intro2").attr('class', 'welcome-triangle-hide');
            $("#welcome-intro3").attr('class', 'welcome-triangle-hide');
            $("#music-player").removeClass('music-player');
            $("#play").removeClass('play');
            $("#next").removeClass('next');
            $("#back").removeClass('back');
            $("#music-bar").removeClass('music-bar');
            $("#menu-button").removeClass('menu-button');
            $("#item-1").attr('class', 'item-hide');
            $("#item-2").attr('class', 'item-hide');
            $("#item-3").attr('class', 'item-hide');
            $("#item-4").attr('class', 'item-hide');
            $("#changeRed").attr('class', '');
            $("#changeBlue").attr('class', '');
            $("#changeGreen").attr('class', '');
            $("#changeOrange").attr('class', '');
            $("#color-picker").attr('class', '');
            $("#color-menu-bar").attr('class', '');
            $("#changeRed > h2").text("");
            $("#changeBlue > h2").text("");
            $("#changeGreen > h2").text("");
            $("#changeOrange > h2").text("");

        }
        else {

            $("#screen-button").attr('class', 'screen-button-on');
            $("#screen-switch").attr('class', 'light-switch-screen-bg-on');
            $(document.getElementById("volume-box").style.borderColor = "orange");
            $(document.getElementById("volume-bar").style.backgroundColor = "orange");
            $("#screen-top-up").attr('class', 'screen-top-down');
            $("#screen-bottom-up").attr('class', 'screen-bottom-down');
            $(document.getElementById("welcome").style.color = "orange")
            $("#welcome").text("WELCOME");
            $("#click-to-enter").text("Click Me");
        }

    });

});


/*----------------------------color Switch Screen ----------------- */
function changeRed() {
    document.getElementById("background").style.backgroundColor = "red";
    document.getElementById("volume-box").style.borderColor = "red";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "red";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "red";
    document.getElementById("volume-bar").style.backgroundColor = "red";
    document.getElementById("volume-bar").style.backgroundColor = "red";
    document.getElementById("welcome").style.color = "red";
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "red";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "red";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "#999999";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "red";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "red";}
    document.getElementById("menu-button").onmouseout = function() {
        this.style.borderColor = "black";}

};
function changeBlue() {
    document.getElementById("background").style.backgroundColor = "blue";
    document.getElementById("volume-box").style.borderColor = "blue";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "blue";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "blue";
    document.getElementById("volume-bar").style.backgroundColor = "blue";
    document.getElementById("welcome").style.color = "blue";
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "blue";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "blue";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "#999999";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "blue";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "blue";}
    document.getElementById("menu-button").onmouseout = function() {
        this.style.borderColor = "black";}
}
function changeGreen() {
    document.getElementById("background").style.backgroundColor = "green"
    document.getElementById("volume-box").style.borderColor = "green";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "green";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "green";
    document.getElementById("volume-bar").style.backgroundColor = "green";
    document.getElementById("welcome").style.color = "green";
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "green";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "green";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "#999999";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "green";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "green";}
    document.getElementById("menu-button").onmouseout = function() {
        this.style.borderColor = "black";}
    

}

function changeOrange() {
    document.getElementById("background").style.backgroundColor = "orange"
    document.getElementById("volume-box").style.borderColor = "orange";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "orange";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "orange";
    document.getElementById("volume-bar").style.backgroundColor = "orange";
    document.getElementById("welcome").style.color = "orange";
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "orange";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "orange";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "#999999";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "orange";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "#b7b7b7";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "orange";}
    document.getElementById("menu-button").onmouseout = function() {
        this.style.borderColor = "black";}
}
/*----------------------------Screen Zoom Effect ----------------- */
$(document).on('click', '#speaker-top', function () {
    $(this).addClass('screen-top-zoom').removeClass('screen-top');
    $(this).find('#screen-switch').addClass('light-switch-screen-bg').removeClass('light-switch-screen-hide');
    $(this).find('#volume-box').addClass('volume-box').removeClass('volume-box-hide');
    $(this).children().addClass('inner-screen-area').removeClass('inner-screen-area-hide');
    $(this).siblings().addClass('speaker-box-hide').removeClass('speaker-box-show');
    $(this).find('.welcome-hide').removeClass('welcome-hide').addClass('welcome-show');


});

/*----------------------------Screen Zoom out ----------------- */
$(document).on('click', '#background', function () {
    $('#speaker-top').removeClass('screen-top-zoom').addClass('screen-top');
    $('#speaker-box').removeClass('speaker-box-hide').addClass('speaker-box-show');
    $('#volume-box').addClass('volume-box-hide').removeClass('volume-box');
    $('.welcome-show').removeClass('welcome-show').addClass('welcome-hide');
});

/*---------------------------- welcome animation ----------------- */

$(document).on('click', '#click-to-enter', function () {
    $("#welcome-intro1").attr('class', 'welcome-triangle1');
    $("#welcome-intro2").attr('class', 'welcome-triangle2');
    $("#welcome-intro3").attr('class', 'welcome-triangle3');
    $("#welcome").text("");
    $("#click-to-enter").text("");
    $("#music-player").addClass('music-player');
    $("#play").addClass('play');
    $("#next").addClass('next');
    $("#back").addClass('back');
    $("#music-bar").addClass('music-bar');
    $("#menu-button").addClass('menu-button');


});

/*---------------------------- menu screen ----------------- */

$(document).on('click', '#menu-button', function () {
    $("#welcome-intro1").attr('class', 'welcome-triangle-hide');
    $("#welcome-intro2").attr('class', 'welcome-triangle-hide');
    $("#welcome-intro3").attr('class', 'welcome-triangle-hide');
    $("#menu").attr('class', 'menu');
    $("#music-player").removeClass('music-player');
    $("#play").removeClass('play');
    $("#next").removeClass('next');
    $("#back").removeClass('back');
    $("#music-bar").removeClass('music-bar');
    $("#item-2 > h1").text("Player");
    $("#item-3 > h1").text("Libary");
    $("#item-4 > h1").text("Colors");
    $("#item-1").attr('class', 'item-1');
    $("#item-2").attr('class', 'item-2');
    $("#item-3").attr('class', 'item-3');
    $("#item-4").attr('class', 'item-4');
    $("#changeRed").attr('class', '');
    $("#changeBlue").attr('class', '');
    $("#changeGreen").attr('class', '');
    $("#changeOrange").attr('class', '');
    $("#color-picker").attr('class', '');
    $("#color-menu-bar").attr('class', '');
    $("#changeRed > h2").text("");
    $("#changeBlue > h2").text("");
    $("#changeGreen > h2").text("");
    $("#changeOrange > h2").text("");

});

/*---------------------------- music Player ----------------- */

$(document).on('click', '#item-2', function () {
    $("#welcome-intro1").attr('class', 'welcome-triangle1');
    $("#welcome-intro2").attr('class', 'welcome-triangle2');
    $("#welcome-intro3").attr('class', 'welcome-triangle3');
    $("#welcome").text("");
    $("#click-to-enter").text("");
    $("#music-player").addClass('music-player');
    $("#play").addClass('play');
    $("#next").addClass('next');
    $("#back").addClass('back');
    $("#music-bar").addClass('music-bar');
    $("#menu-button").addClass('menu-button');
    $("#item-1").attr('class', 'item-hide');
    $("#item-2").attr('class', 'item-hide');
    $("#item-3").attr('class', 'item-hide');
    $("#item-4").attr('class', 'item-hide');
});

/*---------------------------- color picker ----------------- */

$(document).on('click', '#item-4', function () {
    $("#color-picker").attr('class', 'color-picker');
    $("#item-1").attr('class', 'item-hide');
    $("#item-2").attr('class', 'item-hide');
    $("#item-3").attr('class', 'item-hide');
    $("#item-4").attr('class', 'item-hide');
    $("#changeRed").attr('class', 'changeRed');
    $("#changeBlue").attr('class', 'changeBlue');
    $("#changeGreen").attr('class', 'changeGreen');
    $("#changeOrange").attr('class', 'changeOrange');
    $("#color-menu-bar").attr('class', 'color-menu-bar');
    $("#changeRed > h2").text("RED");
    $("#changeBlue > h2").text("BLUE");
    $("#changeGreen > h2").text("GREEN");
    $("#changeOrange > h2").text("ORANGE");
});