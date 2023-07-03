const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const inputLength = inputEl.value.trim().length;
    const inputSetLength = Number(inputEl.dataset.length);

    if (inputLength === inputSetLength) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else if (inputLength === 0) {
        inputEl.classList.remove("valid", "invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid")}

    console.log(inputLength)   
});

