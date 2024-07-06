
const user = {
    username : "sujan",

    website : function() {
        console.log(`${this.username} website owner`);
        console.log(this);
    }
}

// console.log(user.website())
user.username = "susama"
// console.log(user.website())
// console.log(this);

// const chai = function()
// {
//     console.log(this); // this object
// }
// chai()

// Arraow function
const chai = () =>
{
    let username = "sujan"
    // console.log(this.username);
    console.log(this); //{}
}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(5,7))

//implisit return
const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(5,7))


// return object
// const returnObj = () =>{
//     let user = {
//         username: "sujan",
//     }
//     return user
// }
// console.log(returnObj())

// return object through Arrow function
// for return an object you should use the Parentheses ()
const returnObj = () => ({username: "sujan"})
        
// console.log(typeof returnObj())
// console.log(returnObj())

const a = [2,3,4,5,6]

const a2 = a.map((x) => x+1)

// console.log(a2)

function person()
{   
    const selt = this
    self.age = 0
    // console.log(this)  // print the global object
    console.log(self.age)
}
// person()

function Person() {
    // Some choose `that` instead of `self`.
    // Choose one and be consistent.
    const self = this;
    self.age = 0;
  
    setInterval(function growUp() {
      // The callback refers to the `self` variable of which
      // the value is the expected object.
      self.age++;
    }, 1000);
  }
  
  Person()