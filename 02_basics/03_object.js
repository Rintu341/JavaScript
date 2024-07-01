//singleton


//object literals
const mySym = Symbol("key")

const JsUser = {
    name : "Sujan",
    "full name": "sujan mandal",
    age: 18,
    [mySym] : "myKey",
    isLogIn : false,
    balence: 2000,
    email: "sujan@gmail.com"
}

// console.log(JsUser.name)
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])
// console.log(JsUser)

// JsUser.email = "sujan75349@gmail.com"
// delete JsUser.balence 
// console.log(JsUser.email);


// freeze is a Static method, Freezing an object preventing extension and make existing properties non- writable and non-configurable.
// Object.freeze(JsUser)

JsUser.email = "sujan892748@google.com"

// console.log(JsUser.email)

JsUser.greeting = function()
{
    console.log("Hello JS User");
}
console.log(JsUser.greeting())
console.log(JsUser.greeting)
console.log(typeof JsUser.greeting)


