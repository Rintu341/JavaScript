const score = 400
// console.log(score)

const newValue = new Number(300)
// console.log(newValue)


// console.log(newValue.toFixed(2));// it gives specified decimal digits  //300.00
// console.log(typeof newValue.toFixed(1));

const otherNumber = 123.988998
// console.log(otherNumber.toPrecision(3)); // 23.988998 => 24.0
// console.log(otherNumber.toPrecision(3)); // 124
// return round of value

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-JP'));


// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.POSITIVE_INFINITY)

//++++++++++++++++MATH++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.PI)

const myNumber = 78.56555545

// differemce between two number or absolute
// console.log(Math.abs(3 - 9))
// console.log(Math.abs(-6768));


// console.log(Math.min(34,78));
// console.log(Math.max(34,78));

// console.log(Math.floor(6.6));
// console.log(Math.floor(6.3));

// console.log(Math.round(6.6));
// console.log(Math.round(6.3));


// console.log(Math.ceil(6.3));

// console.log(Math.cbrt(6.3)); // cube root of number

console.log(Math.random())
console.log(Math.random() * 10 + 1)


 function getRandomInteger(max, min)
{
    const minInterger = Math.ceil(min)
    const maxInteger = Math.floor(max)

    return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))
console.log(getRandomInteger(10,20))







