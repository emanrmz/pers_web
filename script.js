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
    // Loop workScrollers through Scrolling function
    for (i = 0; i < 3; i++) {
      let bar = $('.workScroller')[i];
      let targ = $('.workContainer')[i];
      if (isScrolledIntoView(bar)) {
        targ.classList.add("scrolled");
      } else {
        targ.classList.remove("scrolled");
      }
    }
  });



}); //END of Onload
