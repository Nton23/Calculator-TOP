//create operators function 
function add (firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}
function substract (firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;
    return result;
}
function multiply (firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;
    return result;
}
function divide (firstNumber, secondNumber) {
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
    
};