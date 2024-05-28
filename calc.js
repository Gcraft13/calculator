const calculator = document.querySelector("#bigscreen");
const keys = calculator.querySelectorAll("button");
const display = document.querySelector("#display");

keys.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    if (e.target.matches("button")) {
      console.log("I've been pressed");
    }
    if (!action) {
      if (dispatchEvent === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is--depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove(".key--operator:focus")
    );

    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    const calculate = (n1, operator, n2) => {
      let result = "";
      if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator === "subtract") {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator === "multiply") {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator === "divide") {
        result = parseFloat(n1) / parseFloat(n2);
      }

      return result;
    };
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }

    if (action === "clear") {
      display.textContent = "0";
    }
  });
});
