const inputText = document.getElementById("textarea");

const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

inputText.onkeyup = () => {

    if (inputText.value.length >= 50) {
        inputText.value = inputText.value.substring(0, 50);
    }
    totalCounter.textContent = inputText.value.length;
    remainingCounter.textContent = 50 - inputText.value.length;

};
