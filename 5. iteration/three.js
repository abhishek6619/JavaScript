// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
    console.log(`Each character is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("UK", "United Kingdom");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "SpiderMan",
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
