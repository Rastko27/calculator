# Calculator Web Application

A simple and interactive calculator web application with basic arithmetic operations.

## How to Use

1. **Open the `index.html` file in your web browser.**
2. **Interact with the calculator using either the on-screen buttons or your keyboard.**

### Instructions

- Click the number buttons (0-9) to enter digits.
- Use the operation buttons (+, -, *, /) to perform calculations.
- Click the equals button (=) to get the result.
- Use the clear button to reset the calculator.
- Use the backspace button to delete the last digit entered.
- Enter decimal numbers using the dot (.) button.

### Keyboard Support

- Use number keys (0-9) to enter digits.
- Use the operation keys (+, -, *, /) for calculations.
- Press Enter to get the result.
- Press Backspace to delete the last digit.
- Use the dot (.) key to enter decimal points.

## Game Logic

The core logic of the calculator is implemented in the `script.js` file. The application handles user input, performs calculations, and updates the display accordingly.

### Main Functions

1. **Basic Operations**:
    - `add(a, b)`: Returns the sum of `a` and `b`.
    - `subtract(a, b)`: Returns the difference of `a` and `b`.
    - `multiply(a, b)`: Returns the product of `a` and `b`.
    - `divide(a, b)`: Returns the quotient of `a` and `b` (handles division by zero).

2. **Operate Function**:
    - `operate(number1, operator, number2)`: Calls the appropriate arithmetic function based on the operator.

3. **Display Management**:
    - Updates the calculator display as the user inputs numbers and operations.

### Example

```javascript
// Add two numbers
console.log(add(5, 3)); // Output: 8

// Subtract two numbers
console.log(subtract(10, 4)); // Output: 6

// Multiply two numbers
console.log(multiply(6, 7)); // Output: 42

// Divide two numbers
console.log(divide(20, 4)); // Output: 5

# Running the Calculator

To use the calculator, open the `index.html` file in a web browser. The calculator interface will be displayed, and you can start performing calculations using the buttons or keyboard.

## Example

1. **Open `index.html` in your web browser**:
    - The calculator interface will appear.
2. **Perform a calculation**:
    - Enter `12`, click `+`, enter `7`, and click `=`. The result (`19`) will be displayed.
    - You can continue with further operations using the result as the first number.

## Credits

Calculator Web App built by Rastko Strbac.
