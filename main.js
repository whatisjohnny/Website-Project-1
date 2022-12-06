// Questions
let wk1 = document.getElementById("wck");
let wk2 = document.getElementById("wck2");
let wk3 = document.getElementById("wck3");
let wk4 = document.getElementById("wck4");

// Answers
let s1 = document.getElementById("sp1");
let s2 = document.getElementById("sp2");
let s3 = document.getElementById("sp3");
let s4 = document.getElementById("sp4");

// Button
let btns = document.getElementById("btnsb");

// Event Listeners
btns.addEventListener("click", Submit);

// Functions
function Submit() {
  if (wk1.value === "Valorant & R6") {
    s1.innerHTML = "Correct!";
  } else {
    s1.innerHTML = "Incorrect.";
  }
  if (wk2.value === "Football") {
    s2.innerHTML = "Correct!";
  } else {
    s2.innerHTML = "Incorrect.";
  }
  if (wk3.value === "Snowboard") {
    s3.innerHTML = "Correct!";
  } else {
    s3.innerHTML = "Incorrect.";
  }
  if (wk4.value === "Stony Plain") {
    s4.innerHTML = "Correct!";
  } else {
    s4.innerHTML = "Incorrect.";
  }
}
