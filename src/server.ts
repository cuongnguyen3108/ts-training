import express from 'express';
import Calculator from "./Calculator";
import supportedOperations from "./config";

const calculator = new Calculator();

supportedOperations.forEach(([operationName, operation]) => {
  calculator.register(operationName, operation)
})


const app = express();
const router = express.Router();

router.get('/calculate', (request, response) => {
    
    const no1 = parseInt(request.query.no1 as string);
    const no2 = parseInt(request.query.no2 as string);


    return response.json({
        result: calculator.calculate(request.query.operation as string, no1, no2)
    })
});

app.use(router);

const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
    console.log(`🚀  Server started at ${serverPort}`)
});
