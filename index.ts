import Addition from "./Addition";
import Calculator from "./Calculator";
import Division from "./Division";
import Mutiplication from "./Mutiplication";
import Subtraction from "./Subtraction";

const calculator = new Calculator();

calculator
  .register('+', new Addition())
  .register('-', new Subtraction())
  .register('x', new Mutiplication())
  .register('/', new Division())
;

const [,,number1, operation, number2] = process.argv;
const formattedNumber1 = parseInt(number1);
const formattedNumber2 = parseInt(number2);

console.log(calculator.calculate(operation, formattedNumber1, formattedNumber2));