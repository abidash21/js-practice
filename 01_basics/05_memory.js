// There are two types of memory:Stack(Primitive),Heap(Non-Primitive)
// In stack we get a copy of the variable

let orgName="Abinash"
let nickName=orgName;//copy of orgName is given
nickName="Bubun"; //changes made in nickName won't reflect in orgName




// In Heap we get a reference to the variable which means changes made in the data will change the original data

let userOne={
    email: "user@gmail.com",
    upi: "abdasha@axs"
}
let userTwo=userOne;
userTwo.email="abinash@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
// **The variable name will be stored in stack the they refer to same memory location in heap
