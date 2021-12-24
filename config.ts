import Addition from "./Addition";
import Division from "./Division";
import Mutiplication from "./Mutiplication";
import { Operation } from "./Operation";
import Subtraction from "./Subtraction";

const supportedOperations: [string, Operation][] = [
    ['+', new Addition()],
    ['-', new Subtraction()],
    ['x', new Mutiplication()],
    ['/', new Division()]
];

export default supportedOperations;
