window.onload = function() {

let animationObject = document.getElementById("animationObject");
let body = document.getElementsByTagName("body")[0];
let animationEnd = document.getElementById("animationEnd");

function createH1() {
  let h1 = document.createElement("h1");
  h1.className = "heroName";
  h1.innerHTML = "Emmanuel Ramirez";
  body.insertBefore(h1, animationObject);
}

animationObject.className = "bounce";
body.className = "backgroundSlide";
animationEnd.addEventListener("animationend", createH1);

} //END of Onload
