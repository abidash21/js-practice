//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id=12345
tinderUser.name="Bubun"
tinderUser.isLoggedin=false

//console.log(tinderUser)

const regularUser = {
    email: "dashabinash@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abinash",
            lastname: "Dash"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname?.firstname)//? is used for optinal chaining to check whether the key exist or not,if it exist it returns the value, if not it returns undefined

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj3 = { 5: "e", 6: "f"}
const obj4 = { 7: "g", 8: "h"}

//const obj = {obj1,obj2}

//Object.assign(target,obj)
const obj=Object.assign(obj4,obj2,obj3)
// Object.assign(obj,obj) here target object is obj4 ,hence obj4+obj2+obj3 is assigned in both obj and obj4(obj4 is getting updated)
//obj===obj4
const newobj=Object.assign({},obj4,obj2,obj3)
// Object.assign({},obj,obj) here target object is empty object no updation in predefined objects

// console.log(obj)
// console.log(obj4)

//spreading of objects
const obj5={...obj1,...obj2,...obj3,...obj4}
console.log(obj5)

console.log(tinderUser)
console.log(Object.keys(tinderUser))//keys of object in array format
console.log(Object.values(tinderUser))//values in array
console.log(Object.entries(tinderUser))//(key,value) in array inside an array

console.log(tinderUser.hasOwnProperty('isLoggdin'))//to check whether a property exist or not
