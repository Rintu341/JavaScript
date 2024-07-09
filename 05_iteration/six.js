const myNums = [1,2,3,4,5,6,7,8,9]

// let newNums = myNums.filter((nums) => nums > 4) // return an array that match the condition
// let newNums = myNums.filter((nums) => { return nums > 4}) // if we use curly-brakets then we must use return keyword 

// If we use forEach instead of filter then

const newNums = []
myNums.forEach((num)=>{
    if(num > 4) newNums.push(num)
} )

// console.log(newNums);

const books = [
    {
        name: "The Great Gatsby",
        publishDate: 1925,
        genre: "Fiction",
        currentEdition: "3rd"
    },
    {
        name: "To Kill a Mockingbird",
        publishDate: 1960,
        genre: "Fiction",
        currentEdition: "5th"
    },
    {
        name: "1984",
        publishDate: 1949,
        genre: "Dystopian",
        currentEdition: "7th"
    },
    {
        name: "Pride and Prejudice",
        publishDate: 1813,
        genre: "Romance",
        currentEdition: "2nd"
    },
    {
        name: "The Catcher in the Rye",
        publishDate: 1951,
        genre: "Fiction",
        currentEdition: "4th"
    },
    {
        name: "Moby-Dick",
        publishDate: 1851,
        genre: "Adventure",
        currentEdition: "6th"
    },
    {
        name: "War and Peace",
        publishDate: 1869,
        genre: "Historical",
        currentEdition: "1st"
    },
    {
        name: "The Odyssey",
        publishDate: 1800,
        genre: "Epic",
        currentEdition: "8th"
    },
    {
        name: "Brave New World",
        publishDate: 1932,
        genre: "Dystopian",
        currentEdition: "9th"
    },
    {
        name: "Crime and Punishment",
        publishDate: 1866,
        genre: "Psychological",
        currentEdition: "3rd"
    }
];

// const userBooks = books.filter((book) => book.genre === "Romance")
const userBooks = books.filter((book) => book.publishDate >= 1900 && book.genre === "Fiction")
console.log(userBooks)