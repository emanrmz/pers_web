window.onload = function() {

let animationObject = document.getElementById("animationObject");
let animationWrap = document.getElementById("animationWrap");
let animationEnd = document.getElementById("animationEnd");

function createH1() {
  let h1 = document.createElement("h1");
  h1.className = "heroName";
  h1.innerHTML = "Emmanuel<br>Ramirez";
  animationWrap.insertBefore(h1, animationObject);
}

function removeFlex() {
  animationWrap.style.justifyContent = "left";
}

animationObject.className = "animationSequence";
animationWrap.className = "backgroundSlide";
animationEnd.addEventListener("animationend", createH1);

function isScrolledIntoView(elem){
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(window).scroll(function(){
  $('#animationObject').each(function(){
    if(isScrolledIntoView($(this))){
      $('h1.name').removeClass('scrolled');
      $('.header').removeClass('scrolled');
    } else {
      $('h1.name').addClass('scrolled');
      $('.header').addClass('scrolled');
    }
  });

  for (i = 0; i < 3; i++) {
  let targ = $('.workContainer')[i];
  if (isScrolledIntoView(targ)){
    console.log([i]+'IS SCROLLED BABY!!!!');
  }else{
    console.log([i]+'aint scrolled');
  }


  }


});



} //END of Onload
