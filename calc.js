const calculator = document.querySelector("#bigscreen");
const keys = calculator.querySelectorAll("button");

keys.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      console.log("I've been pressed");
    }
    if (!e.target.dataset.action) {
      console.log("number key!");
    }
    if (
      e.target.dataset.action === "add" ||
      e.target.dataset.action === "subtract" ||
      e.target.dataset.action === "multiply" ||
      e.target.dataset.action === "divide"
    ) {
      console.log("operator key!");
    }
  });
});

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

let firstNumber = 0;
let secondNumber = 0;

function calculate(firstNumber, secondNumber, operator) {
  console.log(firstNumber, secondNumber, operator);
}
