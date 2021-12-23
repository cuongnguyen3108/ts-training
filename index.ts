import Calculator from "./Calculator";

const calculator = new Calculator();

const [,,number1, operation, number2] = process.argv;
const formattedNumber1 = parseInt(number1);
const formattedNumber2 = parseInt(number2);

console.log(calculator.calculate(operation, formattedNumber1, formattedNumber2));