// Scrolls window to top
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

// Script loads after document is ready
$(document).ready(function() {

  let animationObject = document.getElementById("animationObject");
  let animationWrap = document.getElementById("animationWrap");
  let animationEnd = document.getElementById("animationEnd");

  function createH1() {
    let h1 = document.createElement("h1");
    h1.className = "heroName";
    h1.innerHTML = "Emmanuel<br>Ramirez";
    animationWrap.insertBefore(h1, animationObject);
  }

  animationObject.className = "animationSequence";
  animationWrap.className = "backgroundSlide";
  animationEnd.addEventListener("animationend", createH1);

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
    $('#animationObject').each(function() {
      if (isScrolledIntoView($(this))) {
        $('h1.name').removeClass('scrolled');
        $('.header').removeClass('scrolled');
      } else {
        $('h1.name').addClass('scrolled');
        $('.header').addClass('scrolled');
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
