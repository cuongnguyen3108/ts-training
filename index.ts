
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
const m = new Coordinator(3, 4);
const n = new Coordinator(1, 6);
console.log(m.distance(n));


class Fraction {

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  sum(other: Fraction) {
    return (((this.x*other.y)-(this.y*other.x))/(this.x*other.y))
  }
  divide(other: Fraction) {
    return ((this.x)*(other.y))/((this.y)*(other.x))
  }
}
const a = new Fraction(1, 2);
const b = new Fraction(3, 4);
console.log(a.sum(b));
console.log(a.divide(b));

class Fraction1 {

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
let calculation =new  Fraction1(4,6);
console.log(calculation.x + calculation.y);





