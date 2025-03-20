const inputBox = document.querySelector("#input-box")
// console.log(inputBox);

const buttons = document.querySelectorAll(".button")
// console.log(buttons);

let inputString = ""

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            inputString = eval(inputString)
            inputBox.value = inputString
        } else if (e.target.innerText == "AC") {
            inputString = ""
            inputBox.value = inputString

        } else if (e.target.innerText == "☒") {

            inputString = inputString.substring(0, (inputString.length -1))
            inputBox.value = inputString

        } else {
            inputString += e.target.innerText
            inputBox.value = inputString
        }
    })
})



