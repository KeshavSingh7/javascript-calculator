const prev = document.querySelector("#prev-op");
const cur = document.querySelector("#cur-op");
const ac = document.querySelector("#all-clear");
const del = document.querySelector("#delete");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equal");

ac.addEventListener("click", allClear);

del.addEventListener("click", deleteNumber);

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    appendNumber(numbers[i].innerText);
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", () => {
    if (cur.innerText != "") {
      updateOutput();
      selectedOperator(operators[i].innerText);
    } else {
      alert("You require an operand before this operator.");
    }
  });
}

equals.addEventListener("click", () => {
  if (cur.innerText !== "") {
    let output = compute();
    prev.innerText = "";
    cur.innerText = output;
  } else {
    alert("This operation requires 2 operands.");
  }
});

function allClear() {
  cur.innerText = "";
  prev.innerText = "";
}

function deleteNumber() {
  cur.innerText = cur.innerText.slice(0, -1);
}

function appendNumber(number) {
  cur.innerText += number;
}

function selectedOperator(operator) {
  prev.innerText += " " + operator;
}

function updateOutput() {
  if (prev.innerText === "") {
    prev.innerText = cur.innerText;
    cur.innerText = "";
  } else {
    let output = compute();
    prev.innerText = output;
    cur.innerText = "";
  }
}

function compute() {
  const op = prev.innerText.charAt(prev.innerText.length - 1);
  let ans = 0;
  let op1 = prev.innerText.slice(0, -2);
  let op2 = cur.innerText;
  switch (op) {
    case "+":
      ans = parseFloat(op1) + parseFloat(op2);
      break;
    case "-":
      ans = parseFloat(op1) - parseFloat(op2);
      break;
    case "*":
      ans = parseFloat(op1) * parseFloat(op2);
      break;
    case "÷":
      ans = parseFloat(op1) / parseFloat(op2);
      break;
  }
  return ans;
}
