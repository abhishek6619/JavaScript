// singleton
// Object.create

// object literals

const mySym = Symbol("Key1");

const JsUser = {
  name: "Abhishek",
  "full name": "Abhishek Singh",
  [mySym]: "mykey1",
  age: 18,
  location: "Dhanbad",
  email: "abhis42124@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "abhishek@chatgpt.com";
Object.freeze(JsUser);
JsUser.email = "abhishek@microsoft.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};
JsUser.greetingThree = function () {
  console.log(`Hello Js User, ${this["full name"]}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greetingThree());
