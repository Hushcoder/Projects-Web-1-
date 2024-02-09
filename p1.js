const f = document.querySelector("form");
f.addEventListener("submit", function (e) {
  e.preventDefault();

  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const res = document.querySelector("#result");
  if (h === "" || h < 0 || isNaN(h)) {
    res.innerHTML = "Enter a valid height";
  } else if (w === "" || w < 0 || isNaN(w)) {
    res.innerHTML = "Enter a valid weight";
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    if (bmi < 18.5)
      res.innerHTML = `<span>Your BMI is ${bmi}. You are Underweight</span>`;
    else if (bmi >= 18.5 && bmi < 24.5)
      res.innerHTML = `<span>Your BMI is ${bmi}. You are Normal</span>`;
    else if (bmi >= 24.5 && bmi <= 31.5)
      res.innerHTML = `<span>Your BMI is ${bmi}. You are overweight</span>`;
    else res.innerHTML = `<span>Your BMI is ${bmi}. You are Obese</span>`;
  }
});
