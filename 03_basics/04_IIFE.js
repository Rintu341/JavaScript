// Immediately Invoked Function Expressions (IIFE)

// Syntex: (function body)(function parameter); // always use semicolon

/* NOTE :
    remember after calling IIFE you should add semicolon either it show error,
    becsuse of it do no know the scope if you add semicolon then it will have a scope
*/
//with out using semicolon
// (() => console.log("DB CONNECTED"))() // IIFE as Arrow function 

// (function chai() { console.log("DB COONECTED")})() //  this also work 

//with semicolon

(() => console.log("DB CONNECTED"))();  
(function chai() { console.log("DB COONECTED TWO")})(); // named IIFE //it is just add a function name like we add chai as a function name

(function chai(name) { console.log(`DB COONECTED THREE ${name}`)})("sujan"); // passing parameter