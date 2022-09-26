const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    if (event.target.value === "" || !event.target.checkValidity()) {
      event.target.classList.remove("border-neutrals-300");
      event.target.classList.add("border-error-500");
    } else {
      event.target.classList.remove("border-error-500");
      event.target.classList.add("border-neutrals-300");
    }
  });

  input.addEventListener("focus", (event) => {
    event.target.classList.remove("border-error-500");
    event.target.classList.remove("border-neutrals-300");
  });
});

const radioInputs = document.querySelectorAll(".radio-input");

radioInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    radioInputs.forEach((currentInput) => {
      currentInput.classList.remove("input-checked");
    });
    event.target.classList.add("input-checked");
  });
});
