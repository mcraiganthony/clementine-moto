$(document).ready(function() {

  // Hero text animations

  $(window).scroll(function(){
    if($(window).width() > 1260) {
      windowScroll = $(window).scrollTop();
      contentOpacity = 1 - (windowScroll / ($('.js-hero').offset().top+$('.js-hero').height()));
      $('.js-hero__headline').css('transform','translateY('+Math.floor(windowScroll*0.45)+'px)');
      $('.js-hero__headline').css('-webkit-transform','translateY('+Math.floor(windowScroll*0.45)+'px)');
      $('.js-hero__headline').css('opacity',contentOpacity.toFixed(2));
    }
  });

  // On larger screens, run some extra js

  if($(window).width() > 1260) {
    // See: https://github.com/julianlloyd/scrollReveal.js
    window.sr = new scrollReveal();
  }

  // Initialize smooth scroll

  smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutCubic'
  });

});