// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2023, 0, 23, 9, 53)
let myCreateDate = new Date("05-01-2022")
// console.log(myCreateDate.toString());
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.round(Date.now()/1000)) // into seconds bcuz normally its in milliseconds

let newDate = Date()
console.log(newDate)

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))