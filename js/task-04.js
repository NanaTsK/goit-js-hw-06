let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector("#value");

incrementBtn.addEventListener("click", incrementClick);

function incrementClick() {
    counterValue += 1;
    counterEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);

function decrementClick() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
};