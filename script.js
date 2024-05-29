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
            if(number2 === 0){
                return "CANNOT DIVIDE BY 0";
            }
            else{
                return divide(number1,number2);
            }
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
let zero = document.getElementById("zero");

let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");

one.addEventListener("click", () => display("1"));
two.addEventListener("click", () => display("2"));
three.addEventListener("click", () => display("3"));
four.addEventListener("click", () => display("4"));
five.addEventListener("click", () => display("5"));
six.addEventListener("click", () => display("6"));
seven.addEventListener("click", () => display("7"));
eight.addEventListener("click", () => display("8"));
nine.addEventListener("click", () => display("9"));
zero.addEventListener("click", () => display("0"));

function clearDisplay(){
    displayValue = "";
    displayText.textContent = displayValue;
}

function handleOperator(op) {
    number1 = parseFloat(displayValue);
    operator = op;
    display(op);  // Display the operator
    displayValue = "";  // Reset displayValue to capture number2
}

addButton.addEventListener("click", () => handleOperator("+"));
subtractButton.addEventListener("click", () => handleOperator("-"));
multiplyButton.addEventListener("click", () => handleOperator("*"));
divideButton.addEventListener("click", () => handleOperator("/"));

function getNumberTwo() {
    if(displayValue === ""){
        number2 = 0;
    }
    else{
        number2 = parseFloat(displayValue);
    }
}

let equals = document.getElementById("equals");

equals.addEventListener("click", () => {
    getNumberTwo();
    let result = operate(number1, operator, number2);
    if(typeof result === 'number' && !Number.isInteger(result)){
        result.toFixed(3);
    }
    displayValue = result.toString();
    displayText.textContent = displayValue;
});

let clear = document.getElementById("clear");

function clearVariables(){
    number1 = undefined;
    number2 = undefined;
    operator = "";
}

clear.addEventListener("click", () => {
    clearDisplay();
    clearVariables();
});

let point = document.getElementById("point");

function displayPoint(){
    if(!displayValue.includes(".")){
        displayValue += '.';
    }
    displayText.textContent = displayValue;
}

point.addEventListener("click",() => displayPoint());

let backspace = document.getElementById("backspace");

function deleteCharacter(){
    displayValue = displayValue.slice(0,-1);
    displayText.textContent = displayValue;
}

backspace.addEventListener("click", () => deleteCharacter());