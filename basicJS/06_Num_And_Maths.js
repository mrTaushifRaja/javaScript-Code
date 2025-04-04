const score = 200;
//console.log(score);


const balance = new Number(100.2);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 123.2658
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++++++++++++++++++
//          Maths

console.log(typeof Math);

console.log(Math.abs(-8));  //abs means absolute value sign change
console.log(Math.round(4.6)); // round of value like 5.1=5, 5.6=6
console.log(Math.ceil(4.6)); 
console.log(Math.floor(5.3));
console.log(Math.min(5,5,6,25,7));
console.log(Math.max(4,6,6,3,78,5));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.random()*(max-min+1)+min);



