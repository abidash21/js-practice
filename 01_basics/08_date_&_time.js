let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

console.log(typeof myDate);//Date is a object

let myCreatedDate=new Date(2024,0,3,42,44,35);//Months starts from 0->jan
let newDate=new Date("2024-01-15");
console.log(newDate);
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);//since 1st jan 1970(in milisec)

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));
