// [{}, {}, {}] // array of object

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"

for (const i of greetings) {
    if(i == ' ') continue
    // console.log(`Each char is ${i}`);
}
//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA', " United States of America")
map.set('FR', "France")

// console.log(map)

for (const [key, value] of map) { // array de-structure
    console.log(key,value);
}
const myObj = {
    game1: 'GTA5',
    game2: 'Spiderman'
}
// for (const key of myObj) { //myObj is not iterable
//     console.log(key);
// }
