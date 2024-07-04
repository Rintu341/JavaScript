
let a = 300
if(true)
{
    let a = 10
    var p = 100
    // console.log(a)
}
// console.log(a)
// console.log(p) // we can access the var variable from any where // var do not have a scope 

function one() {
    const username = "Sujan"

    function two() {
        const website = "Youtube"
        // console.log(username)
    }
    // console.log(website) // website not in scope of one
    two()
}
one()

if (true) {
    const username = "sujan"
    if(username === "sujan")
    {
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)
//++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++


 // these two function ececution is defferent 
 // the second one excecute and store into a variable but the problem is we call call function before function defination
 // Otherwise both function call are right
addOne(5)
function addOne(num) {
    return num + 1
}

// addTwo(5) // throw an error // Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}