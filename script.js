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