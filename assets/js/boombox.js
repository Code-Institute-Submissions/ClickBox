
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
            $(document.getElementById("background").style.backgroundColor = "#97F2F3");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor = "#97F2F3");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor = "#97F2F3");
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
            $("#color-menu-bar > h2").text("");
            $("#menu-button > h5").text("");
            $("#changeRed > h2").text("");
            $("#changeBlue > h2").text("");
            $("#changeGreen > h2").text("");
            $("#changeOrange > h2").text("");
            $("#click-to-enter").text("");

        }
        else {

            $("#screen-button").attr('class', 'screen-button-on');
            $("#screen-switch").attr('class', 'light-switch-screen-bg-on');
            $(document.getElementById("volume-box").style.borderColor = "#97F2F3");
            $(document.getElementById("volume-bar").style.backgroundColor = "#97F2F3");
            $("#screen-top-up").attr('class', 'screen-top-down');
            $("#screen-bottom-up").attr('class', 'screen-bottom-down');
            $("#welcome").text("WELCOME");
            $("#click-to-enter").text("Click Me");
            $("#welcome-intro1").attr('class', '');
            $("#welcome-intro2").attr('class', '');
            $("#welcome-intro3").attr('class', '');
        }

    });

});


/*----------------------------color Switch Screen ----------------- */
function changeRed() {
    document.getElementById("background").style.backgroundColor = "#ff8b92";
    document.getElementById("volume-box").style.borderColor = "#ff8b92";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#ff8b92";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#ff8b92";
    document.getElementById("volume-bar").style.backgroundColor = "#ff8b92";
    document.getElementById("volume-bar").style.backgroundColor = "#ff8b92";
    document.getElementById("welcome").style.color = "#ff8b92";
    document.getElementById("clock").style.color = "#ff8b92";
    document.getElementById("click-to-enter").onmouseover = function() {
        this.style.textDecorationColor = "#ff8b92";}
    document.getElementById("click-to-enter").onmouseout = function() {
        this.style.backgroundColor = "transparent";}
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "#ff8b92";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "#ff8b92";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "#ff8b92";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "#ff8b92";}
    document.getElementById("menu-button").onmouseout = function() {
        this.style.borderColor = "black";}

};
function changeBlue() {
    document.getElementById("background").style.backgroundColor = "#97F2F3";
    document.getElementById("volume-box").style.borderColor = "#97F2F3";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#97F2F3";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#97F2F3";
    document.getElementById("volume-bar").style.backgroundColor = "#97F2F3";
    document.getElementById("welcome").style.color = "#97F2F3";
    document.getElementById("clock").style.color = "#97F2F3";
    document.getElementById("click-to-enter").onmouseover = function() {
        this.style.textDecorationColor = "#97F2F3";}
    document.getElementById("click-to-enter").onmouseout = function() {
        this.style.backgroundColor = "transparent";}
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "#97F2F3";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "#97F2F3";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "#97F2F3";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "#97F2F3";}
    document.getElementById("menu-button").onmouseout = function() {
        this.style.borderColor = "black";}
}
function changeGreen() {
    document.getElementById("background").style.backgroundColor = "#d1eb79"
    document.getElementById("volume-box").style.borderColor = "#d1eb79";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#d1eb79";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#d1eb79";
    document.getElementById("volume-bar").style.backgroundColor = "#d1eb79";
    document.getElementById("welcome").style.color = "#d1eb79";
    document.getElementById("clock").style.color = "#d1eb79";
    document.getElementById("click-to-enter").onmouseover = function() {
        this.style.textDecorationColor = "#d1eb79";}
    document.getElementById("click-to-enter").onmouseout = function() {
        this.style.backgroundColor = "transparent";}
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "#d1eb79";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "#d1eb79";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "#d1eb79";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "#d1eb79";}
    document.getElementById("menu-button").onmouseout = function() {
        this.style.borderColor = "black";}
    

}

function changeOrange() {
    document.getElementById("background").style.backgroundColor = "#FDCF76"
    document.getElementById("volume-box").style.borderColor = "#FDCF76";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#FDCF76";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#FDCF76";
    document.getElementById("volume-bar").style.backgroundColor = "#FDCF76";
    document.getElementById("welcome").style.color = "#FDCF76";
    document.getElementById("clock").style.color = "#FDCF76";
    document.getElementById("click-to-enter").onmouseover = function() {
        this.style.textDecorationColor = "#FDCF76";}
    document.getElementById("click-to-enter").onmouseout = function() {
        this.style.backgroundColor = "transparent";}
    document.getElementById("item-2").onmouseover = function() {
        this.style.backgroundColor = "#FDCF76";}
    document.getElementById("item-2").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-3").onmouseover = function() {
        this.style.backgroundColor = "#FDCF76";}
    document.getElementById("item-3").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("item-4").onmouseover = function() {
        this.style.backgroundColor = "#FDCF76";}
    document.getElementById("item-4").onmouseout = function() {
        this.style.backgroundColor = "white";}
    document.getElementById("menu-button").onmouseover = function() {
        this.style.borderColor = "#FDCF76";}
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
    $("#welcome").text("");
    $("#click-to-enter").text("");
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
    $("#menu-button > 5").text("");
    $("#menu-button").attr('class', '');
    $("#color-menu-bar > h2").text("");
    $("#changeRed > h2").text("");
    $("#changeBlue > h2").text("");
    $("#changeGreen > h2").text("");
    $("#changeOrange > h2").text("");
    $("#item-1 > h1").text("HOME");


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
    $("#menu-button > h5").text("");
    $("#menu-button").attr('class', '');
    $("#color-menu-bar > h2").text("");
    $("#changeRed > h2").text("");
    $("#changeBlue > h2").text("");
    $("#changeGreen > h2").text("");
    $("#changeOrange > h2").text("");
    $("#item-1 > h1").text("HOME");

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
    $("#menu-button > h5").text("HOME");
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
    $("#color-menu-bar > h2").text("Pick a Color");
    $("#changeRed > h2").text("RED");
    $("#changeBlue > h2").text("BLUE");
    $("#changeGreen > h2").text("GREEN");
    $("#changeOrange > h2").text("ORANGE");
    $("#menu-button > h5").text("HOME");
    $("#item-1 > h1").text("");
    $("#menu-button").attr('class', 'menu-button');
});

/*---------------------------- clock ----------------- */
 // This is code from W3schools.com 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
/*---------------------------- volume slider ----------------- */
$("#volume").slider({
  	min: 0,
  	max: 100,
  	value: 0,
		range: "min",
  	slide: function(event, ui) {
    	setVolume(ui.value / 100);
  	}
	});
	
	var myMedia = document.createElement('audio');
	$('#player').append(myMedia);
	myMedia.id = "myMedia";

	playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);
	
	function playAudio(fileName, myVolume) {
			myMedia.src = fileName;
			myMedia.setAttribute('loop', 'loop');
    	setVolume(myVolume);
    	myMedia.play();
	}
	
	function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
	}