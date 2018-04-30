// Scrolls window to top
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

// Script loads after document is ready
$(document).ready(function() {

  let animationObject = document.getElementById("animationObject");
  animationObject.className = "animationSequence";

  // Function returns Boolean for whether element is in window
  function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function isScrolledIntoViewHalf(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + ($window.height()/2);

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function() {
    // If animationObject is inside window Boolean
    $('#animationWrap').each(function() {
      if (isScrolledIntoView($(this))) {
        $('h1.name').removeClass('scrolled');
        $('.header').removeClass('scrolled');
        $('h1.heroName').css("color", "rgba(255,255,255,1)");
        $('.statementContainer').css("opacity", "0");
      } else {
        $('h1.name').addClass('scrolled');
        $('.header').addClass('scrolled');
        $('h1.heroName').css("color", "rgba(255,255,255,0)");
        $('.statementContainer').css("opacity", "1");
      }
    });
    // Loop workScrollers through Half Window Scrolling function
    for (i = 0; i < 4; i++) {
      let bar = $('.workScroller')[i];
      let workContainer = $('.workContainer')[i];
      if (isScrolledIntoViewHalf(bar)) {
        workContainer.classList.add("scrolled");
        $('.statementContainer').css("opacity", "0");
      } else {
        workContainer.classList.remove("scrolled");
      }
      if ($('.workContainer.scrolled').index() == 0){
        $('.workWrap').css("filter", "hue-rotate(-.1turn)");
      } else if ($('.workContainer.scrolled').index() == 1){
        $('.workWrap').css("filter", "hue-rotate(-.5turn)");
      } else if ($('.workContainer.scrolled').index() == 2){
        $('.workWrap').css("filter", "hue-rotate(-.6turn)");
      } else {
        $('.workWrap').css("filter", "hue-rotate(0)");
      }

    }
  });



}); //END of Onload
