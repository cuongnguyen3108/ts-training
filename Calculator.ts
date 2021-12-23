import { Operation } from "./Operation";

class Caculator {

  private operations: Map<string, Operation> = new Map<string, Operation>();
    
  register(operationName: string, operation: Operation): Caculator {
    this.operations.set(operationName, operation);
    return this;
  }

  calculate(operationName: string, number1: number, number2: number): number {
    const operation = this.operations.get(operationName);

    if (!operation) {
      throw new Error(`Operation [${operationName}] is not supported`);
    }

    return operation.run(number1, number2)
  }
}
  
export default Caculator;
