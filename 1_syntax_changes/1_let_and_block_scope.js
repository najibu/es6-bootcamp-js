Global scope
if(true) {
  var name = 'Najibu';
}
console.log(name);

Local scope
let age = 27;
if(true) {
  let age = 30;
  console.log('In',age);
}
age = 29;
console.log('Out', age);

/*
Const
 */
const age = 27;
age = 29; //Error
console.log(age);

//Change
const AGE = [27, 29, 31];
console.log(AGE);
AGE.push(25);
console.log(AGE);

const OBJ = {
  age: 27
};
console.log(OBJ);
OBJ.age = 30;
console.log(OBJ);

age = 27;
console.log(age);
var age;

// Declare age b4 initializing it
let age;
age = 27;
console.log(age);

function doSomthg() {
  age = 27;
}
let age;
doSomthg()
console.log(age);

// Arrow function
var fn = () => 'Hello';
console.log(fn());

var fnc = (a, b) => a + b;
console.log(fnc(5, 6));

setTimeout(() => console.log('Hello'), 1000);

// this keyword

function fn() {
  console.log(this); // returns the window object
}
fn();

var button = document.querySelector('button');
var fn2 = () => console.log(this); // refers to the button html element
function fn() {
  console.log(this);
}
button.addEventListener('click', fn);

// Default parameters
function isEqualTo(nub, com) {
  return nub == com;
}
console.log(isEqualTo(10, 10));

function isEqualTo(nub, com = 0) {
  return nub == com;
}
console.log(isEqualTo(10));

function isEqualTo(nub, com = nub) {
  return nub == com;
}
console.log(isEqualTo(10));

// Object Literal Extension
let name = 'Nsubuga'
let age = 27
let obj = {
  name: 'Najibu',
  age,
  greet () {
    console.log(`Hello ${this.name}, ${this.age}`);
  }
};
console.log(obj.greet());

//Rest operator
let numbers = [1,2,3,4,5]
function sumUp(...toAdd) {
  console.log(toAdd)
  let result = 0;
  for (let i = 0; i < toAdd.length; i++)
    {
      result += toAdd[i];
    }
  return result;
}
console.log(sumUp(100, 10, 20))

//Spread operator
let numbers = [1,2,3,4,5]
console.log(Math.max(...numbers))

//For of loop
let rsts = [1.23,2.3,4.5]
for (let rsts of rsts) {
  console.log(rsts)
}

// Template Literals
let name = 'Najibu'
let description = `
  Like this ${name}!
`
console.log(description)

// Destructuring arrays
let numbers = [1,2,3]
let [a, b, c = "Default"] = numbers
console.log(a)
console.log(b)

let a = 5
let b = 6
[b, a] = [a, b]
console.log(b)
console.log(a)

let numbers = [1,2,3]
let [a, , c] = numbers
console.log(a, c)

let [a, b] = [1,2,3]
console.log(a, b)

// Destructuring objects
let obj = {
  name: 'Max',
  age: 27,
  greet () {
    console.log('Hello there');
  }
};
// give aliases hello
let {name, greet: hello } = obj;
console.log(name)
hello();
