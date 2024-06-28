// console.log("0" > 1 );
// console.log("02" > 1 );



// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
    The reason is that an equality check == and comparisons > < >=
    <= work deferently.
    Comparisons convert null to a number, treating it as 0.
    That's Why  null >= 0 is true and null > 0 false 
*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

/*
    in every comparison with undefined it always gives false
*/

/*
    === it checks not only value as well as datatype
*/

console.log("2" === 2); // string != number