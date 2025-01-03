// Primitive

// 7 types : String, Number, Boolearn, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 34567876543234567n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Abhishek",
  age: 18,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
