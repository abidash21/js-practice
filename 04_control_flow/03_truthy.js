const userEmail = "lsnfslk@glk.com"
if (userEmail){
    console.log("Email")
} else {
    console.log("No email")
}

//falsy values 
//false,0 ,-0, BigInt 0n, "",null, defined,Nan

//truthy values
//"0",'false," ",[],{},function(){}

//to check empty array,we check the arr.length===0

//to check empty object,Object.keys(obj).length===0

//Nullish Coalescing Operator (??) : null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 20
console.log(val1)

//Ternary operator - condition ? true:false