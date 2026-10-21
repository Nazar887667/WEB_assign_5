const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "orange";
});
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightblue";
});

const textInput = document.getElementById("textInput");
const output = document.getElementById("output");
textInput.addEventListener("keyup", function () {
  output.textContent = textInput.value;
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operation) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Please enter two numbers";
    return;
  }
  if (operation === "+") result.textContent = a + b;
  if (operation === "-") result.textContent = a - b;
  if (operation === "*") result.textContent = a * b;
  if (operation === "/") {
    result.textContent = b === 0 ? "Cannot divide by zero" : a / b;
  }
}

document.getElementById("addBtn").addEventListener("click", function () { calculate("+"); });
document.getElementById("subBtn").addEventListener("click", function () { calculate("-"); });
document.getElementById("mulBtn").addEventListener("click", function () { calculate("*"); });
document.getElementById("divBtn").addEventListener("click", function () { calculate("/"); });
