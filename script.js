function add(...array){
    let sum = array.reduce((total,current) => {
        return total + current;
    },0);
    return sum;
}

function subtract(...array){
    let result = array.reduce((total,current) => {
        return total - current;
    });
    return result;
}

function multiply(...array){
    let result = array.reduce((total,current) => {
        return total * current;
    },1);
    return result;
}

function divide(...array){
    let result = array.reduce((total,current) => {
        return total / current;
    });
    return result;
}

let number1, operator, number2;

function operate(number1, operator, number2){
    switch(operator){
        case '+':
            return add(number1,number2);
        case '-':
            return subtract(number1,number2);
        case '*':
            return multiply(number1,number2);
        case '/':
            return divide(number1,number2);
    }
}

let displayValue = "";

let displayText = document.getElementById("display-text");

function display(number){
    displayValue += number;
    displayText.textContent = displayValue;
}

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

one.addEventListener("click", () => display("1"));
two.addEventListener("click", () => display("2"));
three.addEventListener("click", () => display("3"));
four.addEventListener("click", () => display("4"));
five.addEventListener("click", () => display("5"));
six.addEventListener("click", () => display("6"));
seven.addEventListener("click", () => display("7"));
eight.addEventListener("click", () => display("8"));
nine.addEventListener("click", () => display("9"));