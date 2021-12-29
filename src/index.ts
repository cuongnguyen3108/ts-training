import Calculator from "./Calculator";
import supportedOperations from "./config";

const calculator = new Calculator();

supportedOperations.forEach(([operationName, operation]) => {
  calculator.register(operationName, operation)
})

const [,,number1, operation, number2] = process.argv;
const formattedNumber1 = parseInt(number1);
const formattedNumber2 = parseInt(number2);

console.log(calculator.calculate(operation, formattedNumber1, formattedNumber2));



const wait = (ms) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve()
    },1000)
  });
}
wait(1000).then(()=>{
  console.log("hello anh linh")
})

