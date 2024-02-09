//detecting button press
var drumbutton = document.querySelectorAll(".drum").length;
// for (var i = 0; i < drumbutton; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     var buttonInnerHtml = this.innerHTML;
//     ms(buttonInnerHtml);
//   });
// }
//detecting keyboard press
document.addEventListener("keydown", function (event) {
  ms(event.key);
});
function ms(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "d":
      var tom4 = new Audio("sounds/tom4-.mp3");
      tom4.play();
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    case "k":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    default:
      console.log(buttonTnnerHtml);
  }
}
