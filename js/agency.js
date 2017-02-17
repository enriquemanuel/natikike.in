/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



/* countdown function */
var countdown_html = document.getElementById("countdown");

function countdown() {

    var return_string = '<i class="fa fa-clock-o"></i> ';
    var today = new Date();

    var weddingDate = new Date(2016, 3, 16, 16);
    var ms = weddingDate - today;

    if (ms > 0) {
        var d = ms / (1000 * 60 * 60 * 24) | 0;
        var h = ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) | 0;
        var m = ms % (1000 * 60 * 60) / (1000 * 60) | 0;
        var s = ms % (1000 * 60) / (1000) | 0;

        var timeParts = [d, h, m, s];
//        console.log(timeParts);
        var timeStringParts = new Array();
        var timeString = "";

        for (var i = 0; i < 4; i++) {

            switch (i) {
                case 0:
                    timeString = " day";
                    break;
                case 1:
                    timeString = " hour";
                    break;
                case 2:
                    timeString = " minute";
                    break;
                case 3:
                    timeString = " second";
                    break;
            }

            if (timeParts[i] > 1) {
                timeString += 's';
            }

            if (timeParts[i] > 0) {
                timeStringParts.push(timeParts[i] + timeString);
            }
        }
        for (var i = 0; i < timeStringParts.length - 1; i++) {

            return_string += timeStringParts[i] + ', ';
        }

        return_string += (' and ' + timeStringParts[timeStringParts.length - 1] + ' until man and wife!')

    }
    else {
        return_string = "It's finally here!!";
    }

    return return_string;
}

setInterval(function() {
countdown_html.innerHTML = '<span>&copy; [enriquemanuel].me 2016</span><p>' + countdown() + '</p>';
}, 1000);