// premitive

// 7 types String, Boolean, Number, null, undefined, BigInt, Symbol

const id = "123"
const anotherId = "123"

// console.log(id === anotherId); // true

const id1 = Symbol("123")
const anotherId1 = Symbol("123")

// console.log(id1 === anotherId1); // false


const value = 454654848454548456564544n
const anotherValue = 75545454n
// console.log(typeof anotherValue);



//Reference (Non primitive)
//Functions, Arrays, Objects

const myHeros = ["Arya", "Khalishi", "Rob", "Ned"];

// console.log(myHeros[0]);

let myObj = {
        name : "Sujan",
        age : 21    
    }

console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction);
console.log(typeof myFunction);


/* type
null => object
undefined => undefined
function => function
object => object
*/