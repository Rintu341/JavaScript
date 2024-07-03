
function sayMyName()
{
    // console.log("S");
    // console.log("U");
    // console.log("J");
    // console.log("A");
    // console.log("N");
}

function addTwoNumber(number1, number2)
{
    return number1 + number2
}

// const result = addTwoNumber(4,"5")
const result = addTwoNumber(4,7)
// console.log("result: ",result)

function loginUserMessage(username)
{
    if(username == undefined)
        {
            console.log("please enter a username")
            return
        }
    return '${username} just logged in'
}


// console.log(loginUserMessage())

 const factorial  = function (number)
{       
    if(number <= 0)
            return 1;
    return  number * factorial(number - 1);
}

// console.log(factorial(6))
// console.log(factorial(""))
// console.log(factorial(-34))

// +++++++++++++++++++++++++ function with Objects

// function fun(num)
// {
//     return num
// }

// console.log(fun(7))

// function take multiple objects
function fun(...num)
{
    return num    // return an array
}

console.log(fun(678,100,500,300))

User = {
    username: "Sujan",
    price: 399
}

function handleObject(anyObject)
{   
    if(anyObject.username &&  anyObject.price){ // for type check 
    console.log(`username id ${anyObject.username} and price is ${anyObject.price}`)
    }
}
// handleObject(User)
handleObject({
    username: "Susama",
    price: Infinity
})


// function with Arrays

const myNewArray = new Array(200,400,100,600)

function returnAnElement(myArr)
{
    return myArr[0]
}

// console.log(returnAnElement(myNewArray))
console.log(returnAnElement([200,100,400,600]))
