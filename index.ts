
class Human {
  name: string
  weight: number

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }
}

class Cat {
  name: string
  weight: number

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

}


let me = new Human('Rikky', 75);
let myPet = new Cat('Kitty', 1.4);


class Coordinator {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(other: Coordinator) {
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) +
      Math.pow(this.y - other.y, 2)
    )
  }
}

class Fraction {

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  sum(other: Fraction) {
    return ((this.x*other.y)+(other.x*this.y))/(this.y*other.y)
  }
  divisionCalculation(other: Fraction) {
    return (this.x*other.y)/(this.y*other.x)
  }
}


const m = new Coordinator(3, 4);
const n = new Coordinator(1, 6);

const x = new Fraction(1,2);
const a = new Fraction(4,5);

console.log(x.sum(a));
console.log(x.divisionCalculation(a));