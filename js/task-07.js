

const slider = document.querySelector("#font-size-control");

slider.addEventListener("input", () => {
    const elemSize = slider.value;
    text.style.fontSize = elemSize + "px";
})
