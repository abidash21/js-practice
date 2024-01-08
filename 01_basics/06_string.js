const name="Abinash"
const num=50
// console.log(name + num + " Dash");

// string interpolation
console.log(`Hi,My name is ${name} and my repoCount is ${num}`);

const userName = new String('Bubunu');

console.log(userName.__proto__);

// first parameter inclusive and second parameter is exclusive
//startIndex>secIndex then parameter get swapped
//Negative Index is treated as zero
const newUser = userName.substring(3,undefined);
console.log(newUser);

//startIndex>secIndex then empty string is returned
//NegativeIndex Char from end of the string

const anotherUser = userName.slice(undefined,3);
console.log(anotherUser);

// In both cases undefined in first place treated as zero and in second place treated as length of the string

const url="https://abinash.com/abinash%20dash"
console.log(url.replace("ash","@"));//replace first occurence of first parameter
