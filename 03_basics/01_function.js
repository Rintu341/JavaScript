
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

console.log(factorial(6))
console.log(factorial(""))
console.log(factorial(-34))

  
