'use strict';
var Swiper = require('swiper/js/swiper');
var circleProgress = {};

function animationPagination (swiper) {
    var selfSwiper = swiper;
    var currentSlider = selfSwiper.activeIndex + 1;
    var timeAutoPlay = selfSwiper.params.autoplay.delay / 1000;
    var enableAutoPlay = selfSwiper.params.autoplay.enabled;
    var $dotActive = selfSwiper.$el.find('.swiper-pagination-bullet[data-index="'+ currentSlider +'"]');
    var $halfCircleLeft = $dotActive.find('.half-circle-left span');
    var $halfCircleRight = $dotActive.find('.half-circle-right span');

    circleProgress = {
        halfCircleLeft: $halfCircleLeft,
        halfCircleRight: $halfCircleRight
    };

    selfSwiper.$el.find('.swiper-pagination-bullet .half-circle-left span').css({
                            'transform': 'rotate(315deg)',
                            'transition-duration': '0s',
                            'transition-delay': '0s'
                        });
    selfSwiper.$el.find('.swiper-pagination-bullet .half-circle-right span').css({
                            'transform': 'rotate(135deg)',
                            'transition-duration': '0s',
                            'transition-delay': '0s'
                        });

    if (enableAutoPlay) {
        $halfCircleLeft.css({
                            'transform': 'rotate(135deg)',
                            'transition-duration': (timeAutoPlay / 2) + 's',
                            'transition-delay': '0s'
                        });
        $halfCircleRight.css({
                            'transform': 'rotate(-45deg)',
                            'transition-duration': (timeAutoPlay / 2) + 's',
                            'transition-delay': (timeAutoPlay / 2) + 's'
                        });
    }

    return circleProgress;
}
var myPlugin = {
    name: 'customPagination',
    params: {
        customPagination: false
    },
    on: {
        init: function () {
            animationPagination(this);
        },
        transitionStart: function () {
            animationPagination(this);
        },
        autoplayStart: function () {
            animationPagination(this);
        },
        progress: function (progress) {
            progress >= 0 && animationPagination(this);
        },
    },
};
var defaultOption = {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}" data-index="${index + 1}">
                            <span class="half-circle-left">
                                <span style="transform: rotate(315deg);"></span>
                            </span>
                            <span class="half-circle-right">
                                <span style="transform: rotate(135deg);"></span>
                            </span>
                    </span>`;
        }
    }
};

module.exports = {
    initNormal: function(swiperContainer, options) {
        swiperContainer = swiperContainer || '.swiper-container';
        options = options || defaultOption;
        // Init swiper plugin
        var swiper = new Swiper(swiperContainer, options);

        return swiper;
    },
    initCustomPanigation: function(swiperContainer, options) {
        swiperContainer = swiperContainer || '.swiper-container--custom-pagination';
        options = options || defaultOption;
        // Install Plugin To Swiper
        Swiper.use(myPlugin);
        options.pagination = defaultOption.pagination;
        options.initialSlide = 1;
        // Init swiper plugin
        var swiper = new Swiper(swiperContainer, options);

        return swiper;
    }
}
