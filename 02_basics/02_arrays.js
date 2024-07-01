const marvel_heros = ["Thor","Ironman","Captain-America","Catpain-Mervel"]
const dc_heros = ['Superman', "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
const allHeros = marvel_heros.concat(dc_heros) // it concat element and return an new Array
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // ... operator is called spread operator // it brake all element of an array 

// console.log(all_new_heros)

console.log(Array.isArray("sujan"))
console.log(Array.from("sujan"))
console.log(Array.from( { name : "sujan"})) // interesting //

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//return new array from a set of element