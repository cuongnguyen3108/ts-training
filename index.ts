import Calculator from "./Calculator";


let calculator = new Calculator();


let [,,number1, operation, number2] = process.argv;
let formattedNumber1 = parseInt(number1);
let formattedNumber2 = parseInt(number2);
let result = NaN;

switch(operation) {
  case '+': 
    result = calculator.add(formattedNumber1, formattedNumber2)
    break;

  case '-':
    result = calculator.subtract(formattedNumber1, formattedNumber2)
    break;
  case '*':
    result = calculator.mutiply(formattedNumber1, formattedNumber2)
    break;
  case '/':
    result = calculator.divide(formattedNumber1, formattedNumber2)
    break;
  default:
    throw new Error(`Operation [${operation}] is not supported`);
}

console.log(result);
