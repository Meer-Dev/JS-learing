let myArr = [1, 2, 3, 4, 5, 6]

// let newArr = new Array(1, 2, 3, 4, 5, 6)

// console.log(myArr[1]);

// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(1));

// const newArr = myArr.join()

// console.log(myArr); //is number
// console.log(newArr); //converted to string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);