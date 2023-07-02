const slider = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");

slider.addEventListener("input", () => {
  const elemSize = slider.value;
  inputTextEl.style.fontSize = elemSize + "px";
});

const initialElemSize = slider.value;
inputTextEl.style.fontSize = initialElemSize + "px";
