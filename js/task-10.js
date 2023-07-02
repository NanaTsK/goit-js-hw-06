function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

inputEl.addEventListener("input", onGetNumber);
createBtnEl.addEventListener("click", onCreate);
destroyBtnEl.addEventListener("click", clearBoxes);

function onGetNumber(event) { 
createBtnEl.value = event.currentTarget.value
};

function onCreate() { 
  createBoxes(createBtnEl.value) 
};

function createBoxes(amount) { 
  let boxSize = 30;
  const boxesArr = [];

  if (amount > 0) {
    for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxEl.style.backgroundColor = getRandomHexColor(); 
    boxSize += 10; 
    boxesArr.push(boxEl);
  }}
  boxesEl.append(...boxesArr)
};

function clearBoxes() { 
  boxesEl.innerHTML = "";
  inputEl.value = "";
  createBtnEl.value = "";
};