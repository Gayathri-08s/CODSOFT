const display = document.querySelector("input[name='display']");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value) || "";
  } catch (error) {
    display.value = "Error";
  }
}

document.querySelectorAll("input[type='button']").forEach(button => {
  button.addEventListener("click", event => {
    const value = event.target.value;

    switch (value) {
      case "AC":
        clearDisplay();
        break;
      case "DE":
        deleteLastCharacter();
        break;
      case "=":
        calculate();
        break;
      default:
        appendValue(value);
    }
  });
});
