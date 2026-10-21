const text = document.getElementById("text");
document.getElementById("changeTextBtn").addEventListener("click", function () {
  text.textContent = "The text has been changed!";
});

const block = document.getElementById("colorBlock");
const colors = ["lightgreen", "lightcoral", "lightyellow", "lightblue"];
let colorIndex = 0;
document.getElementById("colorBtn").addEventListener("click", function () {
  block.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

let fontSize = 16;
document.getElementById("fontBtn").addEventListener("click", function () {
  fontSize += 4;
  if (fontSize > 40) fontSize = 16;
  block.style.fontSize = fontSize + "px";
});

const list = document.getElementById("itemList");
let itemCount = 0;
document.getElementById("addItemBtn").addEventListener("click", function () {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = "Item " + itemCount;
  list.appendChild(li);
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    itemCount--;
  }
});
