let equal = document.getElementById("equal");
let display = document.getElementById("display");
let minus = document.getElementById("minus");
let number = "0";
let decimal = false;
let btn = document.querySelectorAll(".btn");
let plus = document.getElementById("plus");
let equation = 0;
last_event = "";

function update_text(text) {
  display.textContent = text;

  display.innerTex;
}

function _decimal() {
  if (decimal == false) {
    decimal = true;
    addDigit(".");
  }
}

function addDigit(digit) {
  if (number != "0" && number != "Infinity") {
    number += digit;
  } else {
    if (digit != ".") {
      number = digit;
    } else {
      number = "0.";
    }
  }
  update_text(number);
}

function negativePositive() {
  if (parseFloat(number) > 0) {
    number = "-" + number;
  } else {
    number = number.substring(1, number.length);
  }

  update_text(number);
}

function reset_after_event(e) {
  number = 0;
  last_event = e;
  decimal = false;
  update_text(number);
}

function sum() {
  equation += parseFloat(number);

  reset_after_event("sum");
}

function subtraction() {
  if (last_event == "") {
    equation = parseFloat(number);
  } else {
    equation -= parseFloat(number);
  }

  reset_after_event("subtraction");
}

function multiplication() {
  if (last_event == "") {
    equation = parseFloat(number);
  } else {
    equation *= parseFloat(number);
  }

  reset_after_event("multiplication");
}

function division() {
  if (last_event == "") {
    equation = parseFloat(number);
  } else {
    if (number == "0") {
      _clear();
      equation = "Infinity";

      update_text(equation);
    } else {
      equation /= parseFloat(number);
    }
  }

  reset_after_event("division");
}

function _clear() {
  number = 0;
  equation = 0;
  last_event = "";
  decimal = false;
  update_text(number);
}

let result = document.getElementById("equal");
result.addEventListener("click", () => {
  if (last_event == "sum") sum();
  if (last_event == "subtraction") subtraction();
  if (last_event == "multiplication") multiplication();
  if (last_event == "division") division();

  number = equation.toString();
  equation = 0;

  update_text(number);
});
let cleanLastAction = document.getElementById("clean");
cleanLastAction.addEventListener("click", () => {
  if (number.length <= 0) {
    number = "0";
  } else {
    number = number.substring(0, number.length - 1);
  }
  if (number[number.length - 1] == ".") {
    decimal = false;
  }

  update_text(number);
});