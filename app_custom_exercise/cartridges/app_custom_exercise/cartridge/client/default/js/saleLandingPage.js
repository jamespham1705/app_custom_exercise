'use strict';
var Swiper = require('./components/swiper');

function collectionSwiper() {
    var swiper = document.querySelector('#content-landing-recommendation').swiper;

    if($(window).width() >= 768) {
        swiper && swiper.destroy();
    } else {
        !swiper && Swiper.initNormal('#content-landing-recommendation', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            initialSlide: 0,
            spaceBetween: 0,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            }
        });
    }
}

function counDown() {
    // Set the countdown time (in hours)
    let inputTime = 30; //set 30 minutes

    // Calculate the time in milliseconds
    let countDownDate = new Date().getTime() + inputTime * 60 * 1000;

    // Update the countdown every 1 second
    let countdownFunction = setInterval(function() {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the countdown date
        let distance = countDownDate - now;

        // Time calculations for hours, minutes, and seconds
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="countdown"
        $('#countdown-landing-page').html(`
            <div class='col col-4'>
                <div class='row'>
                    <div class='col col-12'>Hours</div>
                    <div class='col col-12'>${hours}</div>
                </div>
            </div>
            <div class='col col-4'>
                <div class='row'>
                    <div class='col col-12'>Minutes</div>
                    <div class='col col-12'>${minutes}</div>
                </div>
            </div>
            <div class='col col-4'>
                <div class='row'>
                    <div class='col col-12'>Seconds</div>
                    <div class='col col-12'>${seconds}</div>
                </div>
            </div>
        `);

        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
        }
    }, 1000);
}

$(document).ready(function () {
    $('#countdown-landing-page').length > 0 && counDown();
    $('.category-landing-page__collection .swiper-container--collection-slot').length > 0 && collectionSwiper();
});
