let num=22;

console.log(typeof null)
console.log(typeof undefined)

// 1)
// Primitive Datatypes:7 types
// String,Number,Boolean,null,undefined,Symbol,BigInt
// **There is no decimal number

const score=100; //number
const scoreVal=100.3 //number
const isloggedin=false; //boolean
const Temp=null; //null(typeof null is object)
let val; const user=undefined; //undefined(value of user can not be changed)


const Id=Symbol('1245'); //symbol
const newId=Symbol('1245'); //symbol
const bigNum=12345678987n; //bigInt(add n atlast)
const Name="Abinash"; //string

console.log(Id===newId);

console.log(typeof isloggedin);
console.log(typeof val);
console.log(typeof Id);
console.log(typeof bigNum);

// Reference Datatypes(Non-primitive):3 types
// Array, Objects, Functions


const fruits=["Mango","Apple","Banana"];//Array
// typeof fruits is object
let myObj={
    name: "Abinash",
    age: 22,
} //object
//typeof object is object

const myFunction=function(){
    console.log("Hello World");
}//function
//type of function is function,but it's called function object
myFunction();

// 2)
// JS is dynamically typed language
// ex: const score=100(no need to mention int)
// TypeScript is statically typed language




