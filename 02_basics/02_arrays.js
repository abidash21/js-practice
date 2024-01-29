const marvel=["IronMan","SpiderMan","Thor"]
const dc=["BatMan","SuperMan","Flash"]
//marvel.push(dc);//It will create array inside array
const hero=marvel.concat(dc);//returns new array and merge two arrays
//console.log(hero);

//spread operator(...) - unpack elements of an array into individual elements
const new_hero=[...marvel,...dc]
//console.log(new_hero)

const arr=[1,2,3,[4,5],6,[7,[8,9]]]
const newArr=arr.flat(Infinity)//flat(depth)-for depth we have to write how many arrays under arrays we have to flatten
//console.log(newArr)

//console.log(Array.isArray("Abinash"));
//console.log(Array.from("Abinash"));

//console.log(Array.from({name: "Abinash",age: 22,length:2}))
//console.log(Array.from({0: 'a',1: 'b', 2: 'c',length: 3}));
//for object - from return empty array if total iteration is not mentioned,and gives array of undefined if elements are not iterable


//console.log(Array.of("Abinash"));
let a =1
let b =2
let c =3
//console.log(Array.of(a,b,c));
//console.log(Array.of(4));
const obj={0: 'a',1: 'b', 2: 'c'}
const new_arr=Array.of(obj)
console.log(new_arr);

//Array.from is used for creating an array from array-like or iterable objects, while Array.of is used for creating an array with specific values regardless of the number of arguments passed in.