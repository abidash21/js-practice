const user = {
    name: "Abinash",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.name}, welcome`)
        console.log(this)
        console.log(user)
    }
}
// user.welcomeMessage()
// user.name="Bubun"
// user.welcomeMessage()

//console.log(this)
//Here it will print empty object as there is nothing in global object but if we try to print it on browser then it will print the global project window

// function dash(){
//     let username="Bhai"
//     console.log(this.username)
// }
//this doesn't work inside function only works for object
//dash()

// const dash = function(){
//     let username="Abinash"
//     console.log(this.username)
// }
// dash()
// const dash = () => {
//     let username="Abinash"
//     console.log(this.username)
// }
// dash()
const obj = {
    name: "John",
    sayNameArrow: () => {
     // console.log(this.name);
    },
    sayNameRegular: function() {
     // console.log(this.name);
    }
  };
  
  obj.sayNameArrow();   // Output: undefined
  obj.sayNameRegular(); // Output: John

  //In the arrow function sayNameArrow, this refers to the outer context in which it was defined, which is likely the global context (or undefined in strict mode), and it does not have access to obj's properties. Thus, this.name is undefined.

  //In the regular function sayNameRegular, this refers to obj because the function is called as a method of obj, so this.name correctly accesses the name property of obj.

  //explicit return
  const addTwo = (num1,num2) => {
    return num1+num2
  }

  //implicit return - for one line code
  const addtwo = (num1,num2) => num1 + num2
  const Addtwo = (num1,num2) => ( num1 + num2 )
  console.log(addTwo(3,4))
  console.log(addtwo(3,4))
  console.log(Addtwo(3,4))

  //curly brases - return is must
  //paranthesis - withou return

  


