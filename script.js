console.log("Hello world!");
let ans = NaN;
let nums = document.querySelectorAll(".number");
let val = 0;
let preAns = NaN;
let operator_clicked = false;
let opTmp = "";

nums.forEach(function getNum(num1) {
  num1.addEventListener("click", function () {
    if (opTmp === "" && !operator_clicked) ans = NaN;
    val = val * 10 + Number.parseInt(num1.textContent);
    displayNumber(val);
  });
});

function displayNumber(num) {
  let screen = document.querySelector(".screen");
  screen.classList.remove("hide");
  screen.innerHTML = screen.innerHTML.replace(
    screen.textContent,
    num.toString()
  );
}

let operators = document.querySelectorAll(".operator");
operators.forEach(function (op) {
  op.addEventListener("click", function () {
    if (isNaN(ans)) ans = val;
    preAns = ans;
    if (op.textContent === "=" && !isNaN(ans)) {
      if (opTmp === "+") {
        ans += val;
      } else if (opTmp === "−") {
        ans -= val;
      } else if (opTmp === "÷") {
        ans /= val;
      } else if (opTmp === "×") {
        ans *= val;
      }
      displayNumber(ans);
      opTmp = "";
      val = 0;
      preAns = ans;
      // ans = NaN;
      operator_clicked = false;
    } else if (!operator_clicked && opTmp === "") {
      displayNumber(op.textContent);
      operator_clicked = true;
      opTmp = op.textContent;
    } else {
      displayNumber(op.textContent);
      if (opTmp === "+") {
        ans += val;
      } else if (opTmp === "−") {
        ans -= val;
      } else if (opTmp === "÷") {
        ans /= val;
      } else if (opTmp === "×") {
        ans *= val;
      }
      opTmp = op.textContent;
      operator_clicked = false;
    }
    val = 0;
  });
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  let screen = document.querySelector(".screen");
  screen.classList.add("hide");
  ans = NaN;
  val = 0;
  opTmp = "";
});

const back = document.querySelector(".move");
back.addEventListener("click", function () {
  console.log("back clicked");
  opTmp = "";
  if (val !== 0) {
    val -= val % 10;
    val /= 10;
    displayNumber(val);
  } else {
    ans = preAns - (preAns % 10);
    ans /= 10;
    if (!isNaN(ans)) displayNumber(ans);
  }
});
