let myDate = new Date();

/*
console.log(myDate); // ==> 2024-06-30T12:54:05.501Z
console.log(myDate.toString()); //==> Sun Jun 30 2024 12:54:05 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //==> Sun Jun 30 2024
console.log(myDate.toLocaleString()); // ==> 6/30/2024, 12:54:05 PM
console.log(myDate.toLocaleDateString());// ==> 6/30/2024
console.log(myDate.toISOString()); //  ==> 2024-06-30T12:54:05.501Z
console.log(myDate.toLocaleTimeString()); // ==>  12:54:05 PM

*/

// let myCurrentDate = new Date(2024,5,30,5,4);
// let myCurrentDate = new Date(2024,5,30);
// let myCurrentDate = new Date("2024-06-30");
let myCurrentDate = new Date("06-30-2024");

// console.log(myCurrentDate);
// console.log(myCurrentDate.toString());
// console.log(myCurrentDate.toDateString());
// console.log(myCurrentDate.toLocaleString());
// console.log(myCurrentDate.toLocaleDateString());
// console.log(myCurrentDate.toISOString());
// // console.log(myCurrentDate.toISOTimeString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCurrentDate.getTime());

// convert current Date miliSecond to Second
// console.log(Math.floor(Date.now()/1000));



// not understand yet
console.log(myTimeStamp.toLocaleString(
    'default',
    {
        weekday: "long",
        timezone : "IST"
    }
));
