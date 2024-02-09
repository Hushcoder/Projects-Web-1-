const allButton = document.querySelectorAll(".button");
const body = document.querySelector("body");

allButton.forEach(function (b) {
  b.addEventListener("click", function (event) {
    body.style.backgroundColor = event.target.id;
  });
});
