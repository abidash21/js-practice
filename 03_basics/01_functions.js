// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// } //function define - parameters
function addTwoNumbers(num1,num2){
    let res=num1+num2
    return res
} 
addTwoNumbers(3,4) //function call - arguments

function userLoggedIn(username){
    return `${username} just logged in`
}
// for default parameter username = "Bubun",if we pass arguments through function call then default value will be override

//if no argument is given then undefined is passed
console.log(userLoggedIn("Abinash"))

//rest operator - ...(same as spread operator)

function cartValue(...num){
    return num
}//if rest operator is not given then only first argument would be passed
function cartValue2(val1,val2,...num){
    return num
}
console.log(cartValue(200,300,400,500))
console.log(cartValue2(200,300,400,500))//val1=200,val2=300 and rest would be in num

const newUser = {
    name: "Abinash",
    price: 299
}

function handleObject(anotherUser){
    console.log(`name is ${anotherUser.name} and price is ${anotherUser.price}`)
}

handleObject(newUser)

