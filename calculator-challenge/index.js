
let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

//create four functions: add(), sunstract(), divid(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculatoion in the paragraph with id="sum-el"

// e.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 1=) Inside the paragraph with the id=sum-el

let sumEl = document.getElementById("sum-el")
function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum:" + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum:" + result
}