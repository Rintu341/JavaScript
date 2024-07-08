// const userEmail = "sujan@gmail.com"
// // empty string consider as a false value

const userEmail = []
// empty string consider as a false value
if(userEmail)
{
    // console.log("got an email");
}else{
    // console.log("don't have user email");
}

// falsy values
// false, 0, -0 , BigInt 0n, "", null, undefined, NaN 

//truthy values
// "0", 'false', " ", [] , {}, function(){}


// check is array empty
const userArr = []
if(userArr.length === 0)
{
    // console.log("array is empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0)
{
    // console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// check null safety  
let val1;
// val1 = 5 ?? 10
// val1 = null?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// Tetnary Operator
//  condition ? true : false