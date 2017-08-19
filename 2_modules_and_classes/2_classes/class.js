// Classes
class Person {
  constructor (name) {
    this.name = name
  }
  greet () {
    console.log(`Hello ${this.name}`)
  }
}

let person = new Person('Najibu');
console.log(person);
person.greet()

// Classes and Prototypes
class Person {
  constructor (name) {
    this.name = name
  }
  greet () {
    console.log(`Hello ${this.name}`)
  }
}

let person = new Person('Najibu');
console.log(person.__proto__ == Person.prototype);

// Inheritance
class Person {
  constructor (name) {
    this.name = name
  }
  greet () {
    console.log(`Hello ${this.name} and age is ${this.age}`)
  }
}

class Najibu extends Person {
    constructor(age) {
      super('Najibu')
      this.age = age;
    }

    greet () {
      console.log('Hello')
    }

    greetTwice () {
      super.greet()
      this.greet()
    }
}
let najibu = new Najibu(45);

najibu.greetTwice()
// prototype
console.log(najibu.__proto__ === Najibu.prototype)

// Static methods
class Helper {
  static logTwice(message) {
    console.log(message)
    console.log(message)
  }
}

Helper.logTwice('Logged!')

// Classes and Modules
export class Helper {
  static logTwice(message) {
    console.log(message)
    console.log(message)
  }
}
Helper.logTwice('Logged!')


// Getters and setters
class Person {
  constructor(name){
    this._name = name
  }

  get name() {
    return this._name.toUpperCase()
  }

  set name (value) {
    if(value.length > 2) {
      this._name = value
    } else {
      console.log('Rejected')
    }

  }
}

let person = new Person('Najibu')

console.log(person)

person.name = 'Nsbuga'

console.log(person.name)


// Extending built in objects
class ConvertableArray extends Array {
  convert() {
    let returnArray =  []
    this.forEach(value => returnArray.push(`Converted! ${value}`))
    return returnArray
  }

}

let numberArray = new ConvertableArray()

numberArray.push(1)
numberArray.push(2)
numberArray.push(3)

console.log(numberArray.convert())

