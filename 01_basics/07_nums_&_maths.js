const score=200;
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toFixed(4));

const num=172.589
//console.log(num.toPrecision(5));

const val=1000000000;
//console.log(val.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.round(6.7));
console.log(Math.random());//value always between 0 & 1

// Make a random dice game
const min=1;
const max=6;
console.log(Math.floor(Math.random()*(max-min+1))+min)
console.log(Math.random()*(max-min+1));