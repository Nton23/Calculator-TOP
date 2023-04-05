//create operators function 
function add(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}
function substract(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;
    return result;
}
function multiply(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;
    return result;
}
function divide(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    return result;
}

//Create 3 global variables: first input, operator sign, second input
let firstNumberInput = '';
let secondNumberInput = '';
let operatorInput = '';

//Create an operate function takes an operator and 2 numbers
//then calls one of the above function on the numbers
function operate(firstNumber, secondNumber, operatorSign) {
    let result;
    switch (operatorSign) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = substract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
};

//create display variable
const display = document.getElementById("display");
display.textContent = 0;

//create global variables to store the number user input
let numberInputArray = [];
let newOutput = "";
let isOperatorChecked = false;
let isEqualBttnChecked = false;
let updatedInput = 0;
let isPercentBttnChecked = false;
let percentInputUpdated = 0;

//funciton to get numbers when user click on the button
function getNumbers(bttnIDName, numberValue) {
    const button = document.querySelector(`#${bttnIDName}`);
    button.addEventListener("click", () => {
        if (isOperatorChecked === true) {
            secondInput(numberValue);
            isOperatorChecked = false;
            numberInputArray = [];
        } else {
            firstInput(numberValue);
        }
    });
}

//create a get operator function
function getOperators(bttnIDName, operatorSign) {
    const button = document.querySelector(`#${bttnIDName}`);
    button.addEventListener("click", () => {
        isOperatorChecked = true;
        numberInputArray = [];
        operatorInput = operatorSign;
    })
}

//create an event for equal to call the operate function above
const equalSignBttn = document.getElementById("equal-sign-bttn");
equalSignBttn.addEventListener("click", () => {
    isEqualBttnChecked = true;
    let result = operate(firstNumberInput, secondNumberInput, operatorInput);
    display.textContent = result;
    updatedInput = result;
    firstNumberInput = updatedInput;
})

//store number input into array
function firstInput (userInput) {
    if(numberInputArray.length < 13) {
        numberInputArray.push(userInput);
    }
    newOutput = numberInputArray.join("");
    firstNumberInput = parseInt(newOutput);
    display.textContent = firstNumberInput;
}

//store second number input into array
function secondInput (userInput) {
    if(numberInputArray.length < 13) {
        numberInputArray.push(userInput);
    }
    newOutput = numberInputArray.join("");
    secondNumberInput = parseInt(newOutput);
    display.textContent = secondNumberInput;
}

//create reset button and add an event to it
const acResetBttn = document.getElementById("ac-reset-bttn");
acResetBttn.addEventListener("click", () => {
    display.textContent = 0;
    numberInputArray = [];
    firstNumberInput = 0;
    secondNumberInput = 0;
    isEqualBttnChecked = false;
    isOperatorChecked = false;
    isPercentBttnChecked = false;
})

//create a percentage button and add an event to it
const percentBttn = document.getElementById("percent-bttn");
percentBttn.addEventListener ("click", () => {
    isPercentBttnChecked = true;
    let result = (firstNumberInput * 0.01).toFixed(2);
    if (isOperatorChecked) {
        secondNumberInput += parseFloat(result);
        display.textContent = secondNumberInput;
    } else {
        firstNumberInput = parseFloat(result);
        display.textContent = firstNumberInput;
    }
    numberInputArray = [];
})

//call function to store the operator when the user select
getOperators("plus-bttn", "+");
getOperators("minus-bttn", "-");
getOperators("multiple-bttn", "*");
getOperators("divide-bttn", "/");

//call function to display the number when button is pressed
getNumbers("number-zero-bttn", 0);
getNumbers("number-one-bttn", 1);
getNumbers("number-two-bttn", 2);
getNumbers("number-three-bttn", 3);
getNumbers("number-four-bttn", 4);
getNumbers("number-five-bttn", 5);
getNumbers("number-six-bttn", 6);
getNumbers("number-seven-bttn", 7);
getNumbers("number-eight-bttn", 8);
getNumbers("number-nine-bttn", 9);

