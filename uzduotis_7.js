"use strict";

function convertTemperature() {
  const value = Number(document.querySelector("#tempInput").value);
  const unit = document.querySelector("#unitSelect").value;
  const result = document.querySelector("#result");

  if (unit === "c") {
    const f = (value * 9) / 5 + 32;
    result.textContent = f.toFixed(1) + "° Fahrenheit";
  } else {
    const c = ((value - 32) * 5) / 9;
    result.textContent = c.toFixed(1) + "° Celsius";
  }
}
document.querySelector("#covertBin");
document.addEventListener("click", convertTemperature);
