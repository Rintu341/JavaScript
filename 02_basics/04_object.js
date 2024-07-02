// const tinderUser = new Object() // singleton User
const tinderUser = {} // object literals

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regulerUser =
{
    email: "sujan@gamil.com",
    fullname: {
        userfullname:{
                firstname: "sujan",
                lastname: "mandal"
        }
    }
}
// console.log(regulerUser.fullname);
// console.log(regulerUser.fullname.userfullname);

const target = {
    1: "a",
    2: "b"
}
const source = {
    3: "c",
    4: "d"
}
// const returnTarget = {target,source};
// console.log(returnTarget);
//{ target: { '1': 'a', '2': 'b' }, source: { '3': 'c', '4': 'd' } }

const returnTarget = Object.assign(target,source) // source marge into target
// console.log(returnTarget) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(returnTarget == target); // true


//Array of Objects
const user =[
    {
        id: 1,
        email: "sujan@google.com"
    },
    {
        id:2,
        email: "sujanrintu@gamil.com"
    }
]

// console.log(user[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)) // convert object to array of keys
// console.log(Object.values(tinderUser))  // convert object to array of values
// console.log(Object.entries(tinderUser)) // property with there value


// console.log(tinderUser.hasOwnProperty('id'))

// de-structure 
const course = {
    course_name : "JS course",
    price: 999,
    course_instructor: "hitesh"
}

// course .course_instructor

// const {course_instructor} = course
const {course_instructor : instructor} = course

console.log(instructor)
