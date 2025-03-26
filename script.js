const inputBox = document.querySelector("#input-box");
const buttons = document.querySelectorAll(".button");

let inputString = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === "=") {
            if (inputString.trim() === "") {
                inputBox.value = "Error";
                return;
            }
            try {
                inputString = new Function('return ' + inputString)();
                inputBox.value = inputString;
            } catch (error) {
                inputBox.value = "Error";
            }
        } 
        else if (buttonText === "AC") {
            inputString = "";
            inputBox.value = inputString;
        } 
        else if (buttonText === "☒") {
            if (inputString.length > 0) {
                inputString = inputString.substring(0, inputString.length - 1);
                inputBox.value = inputString;
            }
        } 
        else {
            inputString += buttonText;
            inputBox.value = inputString;
        }
    });
});
