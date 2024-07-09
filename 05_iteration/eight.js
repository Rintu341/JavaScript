const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currval) => {
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc * currval + 2
},1)

// in call back function body you can use any arithmatic operation.
console.log(myTotal);