const c = document.querySelector("#clock");
setInterval(function () {
  const date = new Date();
  c.innerHTML = date.toLocaleTimeString();
}, 1000);
