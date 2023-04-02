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
let firstNumberInput = 0;
let secondNumberInput = 0;
let operatorInput = "";

//Create an operate function takes an operator and 2 numbers
//then calls one of the above function on the numbers
function operate(firstNumber, secondNumber, operatorSign) {
    let sign = operatorSign;
    switch (sign) {
        case "operatorInput":
            add(firstNumber, secondNumber);
            break;
        case "operatorInput":
            substract(firstNumber, secondNumber);
            break;
        case "operatorInput":
            multiply(firstNumber, secondNumber);
            break;
        case "operatorInput":
            divide(firstNumber, secondNumber);
            break;
    }
};
//get display
const display = document.getElementById("display");

function getNumbers(bttnIDName, numberValue) {
    const button = document.querySelector(`#${bttnIDName}`);
    button.addEventListener("click", () => {
        let value = numberValue;
        display.innerHTML = value;
    });
}
function getOperators(bttnIDName, operatorSign) {
    const button = document.querySelector(`#${bttnIDName}`);
    button.addEventListener("click", () => {
        let operator = operatorSign;
        return operator;
    })
}

getOperators("plus-bttn", "+");
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



























/*
//storing # 0 and display the number
const numberZeroBttn = document.querySelector("#number-zero-bttn");
numberZeroBttn.addEventListener("click", () => {
    let numberZero = '0';
    display.innerHTML = numberZero;
})
//storing # 1 and display the number
const numberOneBttn = document.querySelector("#number-one-bttn");
numberOneBttn.addEventListener("click", () => {
    let numberOne = '1';
    display.innerHTML = numberOne;
})
//storing # 2 and display the number
const numberTwoBttn = document.querySelector("#number-two-bttn");
numberTwoBttn.addEventListener("click", () => {
    let numberTwo = '2';
    display.innerHTML = numberTwo;
})
//storing # 3 and display the number
const numberThreeBttn = document.querySelector("#number-three-bttn");
numberThreeBttn.addEventListener("click", () => {
    let numberThree = '3';
    display.innerHTML = numberThree;
})
//storing # 4 and display the number
const numberFourBttn = document.querySelector("#number-four-bttn");
numberFourBttn.addEventListener("click", () => {
    let numberFour = '4';
    display.innerHTML = numberFour;
})
//storing # 5 and display the number
const numberFiveBttn = document.querySelector("#number-five-bttn");
numberFiveBttn.addEventListener("click", () => {
    let numberFive = '5';
    display.innerHTML = numberFive;
})
//storing # 6 and display the number
const numberSixBttn = document.querySelector("#number-six-bttn");
numberSixBttn.addEventListener("click", () => {
    let numberSix = '6';
    display.innerHTML = numberSix;
})
//storing # 7 and display the number
const numberSevenBttn = document.querySelector("#number-seven-bttn");
numberSevenBttn.addEventListener("click", () => {
    let numberSeven = '7';
    display.innerHTML = numberSeven;
})
//storing # 8 and display the number
const numberEightBttn = document.querySelector("#number-eight-bttn");
numberEightBttn.addEventListener("click", () => {
    let numberEight = '8';
    display.innerHTML = numberEight;
})
//storing # 9 and display the number
const numberNineBttn = document.querySelector("#number-nine-bttn");
numberNineBttn.addEventListener("click", () => {
    let numberNine = '9';
    display.innerHTML = numberNine;
})*/

