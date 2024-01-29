// Js arrays are resizable and can contains different datatypes
// array copies are shallow copies
// Shallow Copy - properties share the same reference with the source
// Deep Copy - do not share the same reference
const myArr = [0,1,2,3,4]
const myArr2 = new Array (1,2,3,4)
// console.log(myArr);
// myArr.push(5);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(8);//insert in the beginning
// myArr.shift();//remove from the beginning
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.includes(2));//checks value is present in the array or not

// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(8));//if element is not present than it returns -1

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);//convert array to string with separators
// console.log(typeof newArr);

//slice vs splice
console.log("A",myArr);
const arr1=myArr.slice(1,3);
console.log(arr1);
console.log("B",myArr);
const arr2=myArr.splice(1,3);
console.log(arr2);
console.log("C",myArr);
//slice doesnot include the last index element and doesn't manupulate the origingal array
//splice includes the last index element and manipulates the original array


