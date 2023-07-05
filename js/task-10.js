function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const min = Number(inputEl.getAttribute("min"));
const max = Number(inputEl.getAttribute("max"));
const step = Number(inputEl.getAttribute("step"));

inputEl.addEventListener("input", onGetNumber);
createBtnEl.addEventListener("click", onCreate);
destroyBtnEl.addEventListener("click", clearBoxes);

function onGetNumber(event) { 
  createBtnEl.value = event.currentTarget.value;
}

function onCreate() { 
  const value = Number(createBtnEl.value);
  if (value < min || value > max) {
    alert(`Value must be a number between ${min} and ${max}`);
    return;
  }
  createBoxes(value);
}

function createBoxes(amount) { 
  let boxSize = 30;
  const boxesArr = [];

  if (amount > 0) {
    for (let i = 0; i < amount; i += step) {
      const boxEl = document.createElement("div");

      boxEl.style.width = `${boxSize}px`;
      boxEl.style.height = `${boxSize}px`;
      boxEl.style.backgroundColor = getRandomHexColor(); 
      boxSize += 10; 
      boxesArr.push(boxEl);
    }
  }
  boxesEl.append(...boxesArr);
}

function clearBoxes() { 
  boxesEl.innerHTML = "";
  inputEl.value = "";
  createBtnEl.value = "";
}
