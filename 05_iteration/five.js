const coding = ["js","ruby","java","python","cpp"]

/*
    for every element the call back function call
*/
// console.log(coding.forEach((x)=> {return x})) // return void
// console.log( coding.map((x)=> {return x}) );// return any //[ 'js', 'ruby', 'java', 'python', 'cpp' ]
function printMe(item) {
    console.log(item)
}

// coding.forEach(printMe) // when we pass explicit function then we just need to pass the reference 

// for each call back function have three parametter => item,index and arr(hole array)
coding.forEach((item,index,arr) =>
{
    // console.log(item,index,arr)
})
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "kotlin",
        languageFileName: "kt",
    }

]
myCoding.forEach((item) =>
{
    console.log(item.languageFileName);
})