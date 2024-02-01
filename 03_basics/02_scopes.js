//block scope vs global scope

//var a=300

if (true){
    var a=30
    let b=40
    const c=50
}
//{}-scope
//variable declared within scope should be block scope or local scope and outside it are global scope
//The problem here is let and const can't be printed outside the if else scope but var can be printed. So we avoid using 'var'

console.log(a)

let num=200
if (true){
     num=10 //here num is the global variable
     //let num=20  //here num is the local variable
     //we can use same variable name in both scope at a time
     //console.log(num)
}
//console.log(num)

function one(){
    const username="Abinash"
    function two(){
        const website="youtube"
        console.log(username)
    }
    two()
    //console.log(website)
}
one()

addOne(5)
function addOne(num){
    return num+1
}

//addTwo(5) //we can't call a function declared with const before initialzing it - hoisting
const addTwo = function(num){
    return num+2
}
