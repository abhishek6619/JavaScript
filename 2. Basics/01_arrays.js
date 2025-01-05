// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Captain America", "Spider Man"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);

// Array Methods

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
