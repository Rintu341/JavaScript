    /*
         -> JavaScript arrays are Resizable and contain Mix of different data types 
         ->javaScript array-copy extension create shallow copy 
         -> javaScipt arrays are  not associative arrays
    */
    let myArray =  [2,4,7,8,10]

    // console.log(myArray);

    let myArray2 = new Array(3,4,5,6,7,8,8,9);

    // console.log(myArray2)
    // console.log(myArray2.length)

    //  iterator
    const iterator = myArray2[Symbol.iterator]()

    // for(const value of iterator)
    //     {
    //         console.log(value);
    //     }

    //Array Methods++++++++++++++++++++++++++++++++++++

    // console.log(myArray[6])

    const newArr = new Array(0,1,2,3,4,5)

    // newArr.unshift(9)// add element in front
    // newArr.shift() // delete first element
    // console.log(newArr)

    const arr1 = new Array(2,3,[3,6,8,[4,9,10]]) //[ 2, 3, 3, 6, 8, [ 4, 9, 10 ] ]

    // console.log(arr1.flat());
    // console.log(arr1.flat(Infinity));

    // console.log(arr1.includes(7)) // false // check element present in an array or not
    // console.log(arr1.indexOf(7)) // false // get the index of specified element if not present then return -1


    const joinArr = newArr.join()

    console.log(joinArr) // 012345
    console.log(typeof joinArr) // string

    // interview Question on slice and splice
    const  arr2 = [0,1,2,3,4,5,6,7]

    console.log("A", arr2)  // [0,1,2,3,4,5,6,7]
    const newA = arr2.slice(1,4) // it just copy range of element where from start  to end first but it do not modify the original array 
    console.log("B", arr2) //[0,1,2,3,4,5,6,7]
    console.log(newA) // [1,2,3]

    const newA2 = arr2.splice(1,4) // it just copy range of element where from start  to end  but it  modify the original array 
    console.log("C", arr2) //[ 0, 5, 6, 7 ]
    console.log(newA) // [ 1, 2, 3 ]






