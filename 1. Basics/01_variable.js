const accountId = 144553;
let accountEmail = "abhis42124@gmail.com";
var accountPassword = "12345";
accountCity = "Jharkhand";
let accountSate;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "212121";
accountCity = "Bangaluru";

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountSate,
]);
