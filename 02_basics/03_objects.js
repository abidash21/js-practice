//if we declare objects by literals then singleton doesn't form.

//if we declare by constructor then singleton forms 
//ex: Object.create

// object has (key,value) pairs and key is a string bydefault

//object literals
const mySym = Symbol("key1")

const newUser = {
    name: "Abinash",
    "full name": "Abinash Dash",
    [mySym]: "myKey",//way to use symbol else it will considered as string
    age: 22,
    location: "Ranchi",
    email: "dashabinash2002@gmail.com",
    isLoggedin: false,
    lastLogin: ["Friday","Monday"]
}

// console.log(newUser.age);
// console.log(newUser["age"]);
// console.log(newUser["full name"]);
// console.log(newUser[mySym]);


newUser.age=24 //override values
//Object.freeze(newUser) //lock values
newUser.age=30
//console.log(newUser)

newUser.greeting = function (){
    console.log("Hello World")
}
newUser.greetingTwo = function (){
    console.log(`Hello World,${this["full name"]}`)
}// use this keyword to refer keys of same object

//console.log(newUser.greeting)//function is not executed only a reference to a function is returned
console.log(newUser.greeting())
console.log(newUser.greetingTwo())
