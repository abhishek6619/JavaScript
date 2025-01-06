# Introduction to JavaScript🚀

Welcome to the **JavaScript** repo! Here, I have my JavaScript explorations - code and notes.

## 📚 Learning Resources

I’m currently following the <a href="https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37">Chai Aur Code</a> YouTube channel for JavaScript tutorials and insights by <a href="https://github.com/hiteshchoudhary">Hitesh Sir</a>. Feel free to check it out for additional perspectives and insights!

You Can read the basic of javascript from here <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Mdn</a>

<p>JavaScript is a versatile, lightweight scripting language widely used in web development. It can be utilized for both client-side and server-side development, making it essential for modern web applications. Known as the scripting language for web pages, JavaScript supports variables, data types, operators, conditional statements, loops, functions, arrays, and objects. With JavaScript, you can create dynamic, interactive, and engaging websites.</p>

### 1. Variables in JavaScript

<p>JavaScript Variables are the building blocks of any programming language. In JavaScript, variables can be used to store reusable values.</p>

**List of variables:**

<table style="width:100%">
  <tr>
    <th>Variables name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Var</td>
    <td>Oldest keywords to declare a variable and var can be updated and redeclared.</td>
  </tr>
  <tr>
    <td>let</td>
    <td>Block-scoped, can’t be accessible out the particular block, and let can be updated but not redeclared.</td>
  </tr>
  <tr>
    <td>Const</td>
    <td>Block scope, neither be updated nor redeclared.</td>
  </tr>
</table>

```bash
var geek = "Hello World"     // Declaration using var
let $ = "Welcome"           // Declaration using let
const _example = "Hello"      // Declaration using const
```

### 2. Data types in JavaScript

<p>Data type in JavaScript defines the type of data stored in a variable.</p>

**_List of data types_**

<table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Numbers</td>
    <td>Represent both integer and floating-point numbers.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>A string is a sequence of characters. In JavaScript, strings can be enclosed within single or double quotes.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>Represent a logical entity and can have two values: true or false.</td>
  </tr>
  <tr>
    <td>Null</td>
    <td>This type has only one value: null. It is left intentionally so that it shows something that does not exist.</td>
  </tr>
  <tr>
    <td>Undefined</td>
    <td>A variable that has not been assigned a value is undefined.</td>
  </tr>
  <tr>
    <td>Symbol</td>
    <td>Unlike other primitive data types, it does not have any literal form. It is a built-in object whose constructor returns a symbol that is unique.</td>
  </tr>
  <tr>
    <td>bigint</td>
    <td>The bigint type represents the whole numbers that are larger than 2<sup>53</sup>-1. To form a bigint literal number</td>
  </tr>
  <tr>
    <td>Object</td>
    <td>It is the most important data-type and forms the building blocks for modern JavaScript.</td>
  </tr>
</table>

## Array

An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.

```bash
let a = [1, 2, 3, 4, 5];
console.log(a);
```

### Array Method

```bash
const myArr = [0, 1, 2, 3, 4, 5];
myArr.push(6); // add new element
myArr.push(7);
myArr.pop(); // removing last element

myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(0));
console.log(myArr.indexOf(9));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
```

```bash
const marvel_heros = ["Thor", "IronMan", "SpiderMan"];
const dc_heros = ["Superman", "flash", "Batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({ name: "Abhishek" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

```