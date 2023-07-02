const slider = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");

function handleInput() {
  const elemSize = slider.value;
  inputTextEl.style.fontSize = `${elemSize}px`;
}

slider.addEventListener("input", handleInput);

slider.value = (parseInt(slider.min) + parseInt(slider.max)) / 2;
handleInput();