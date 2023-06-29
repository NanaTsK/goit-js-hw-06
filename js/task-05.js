const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (textInput) => {
    textInput.currentTarget.value === ""
    ? textOutput.textContent = "Anonymous"
    : textOutput.textContent = textInput.currentTarget.value
  });

  