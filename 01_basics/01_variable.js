const accountId = 144553
let accountEmail = "sujanmandal@gamil.com"
var accountPassword = "434343434"
accountCity = "kolkata"

let accountState;

accountEmail = "sujanrintu@gamil.com"
accountPassword = "1212121"
accountCity = "pune"
// accountId = "677676767" // not allowed
console.log(accountId);

/*
 prefer not to use var because of issue in block scope and functional scope
*/


// print in table format
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
if (accountState == undefined ) {
    console.log("value not exist");
}