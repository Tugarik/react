class Car {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

let car = new Car("BMW", 21);
console.log(car);

class Carr {
  id;
  #name;
  wheels = 4;
  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
  setName(name) {
    this.#name = name;
  }
}

const carr = new Carr("Toyota");
carr.setName("Benz");
console.log(carr.getName());
