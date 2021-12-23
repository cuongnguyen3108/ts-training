import { Operation } from "./Operation";

class Subtraction implements Operation {
    run(number1: number, number2: number): number {
        return number1 - number2;
    }

}

export default Subtraction;
