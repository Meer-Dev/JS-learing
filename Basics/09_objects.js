//singleton

//object literals
const mysymb = Symbol("key1")
const User1 = {
    name: "meer",
    'last name' : "fareed",
    age: 18,
    [mysymb]: "mykey1",
    email: "meer@google.com",
    isLoggedIn: false

}
// console.log(User1.age);
// console.log(User1["age"]);
// console.log(User1.last name); //you cant access this with this method so we have to use other method
// console.log(User1["last name"]);
// console.log(User1[mysymb]);

// User1.email = "meer@meezan.com"
// console.log(User1.email);

// Object.freeze(User1)
// User1.email = "meer@gmail.com"
// console.log(User1.email);

User1.greeting = function(){
    console.log("Hello JS user");
}

User1.greeting2 = function(){
    console.log(`Hello JS, ${this.name}`);
}

console.log(User1.greeting());
console.log(User1.greeting2());