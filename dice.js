var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdice1 = "dice" + randomnumber1 + ".png"; //dice-image 1 to 6//
var randomsource1 = "images/" + randomdice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsource1);
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdice2 = "dice" + randomnumber2 + ".png"; //dice-image 1 to 6//
var randomsource2 = "images/" + randomdice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsource2);
if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS!!🚩";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS!!🚩";
} else {
  document.querySelector("h1").innerHTML = "DRAW !!!!";
}
