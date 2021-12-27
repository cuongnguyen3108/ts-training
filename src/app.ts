
import Calculator from "./Calculator";

const calculator = new Calculator();
var express = require('express');
var app = express();
var PORT = 3000;
  
var router = express.Router();
    
router.get('/', function () {
const [,,number1, operation, number2] = process.argv;
const formattedNumber1 = parseInt(number1);
const formattedNumber2 = parseInt(number2);
var result;
result=calculator.calculate(operation, formattedNumber1, formattedNumber2);

console.log(result);   
})
  
app.use(router);
  
app.listen(PORT, function(){
    console.log("Server listening on PORT", PORT);
});
