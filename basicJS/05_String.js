const name = "Md Taushif Raja"
const repoCount = 5669

//console.log(name+repoCount+Value); // this is a bad Syntax

//this is good Syntax for string
console.log(`Hello My name is ${name} and My repoCount is ${repoCount}`);

const gameName = new String('Md Taushif Raja');

console.log(gameName[0]);
console.log(gameName.__proto__);//this is a protoType String

console.log(gameName.length); // this is a maping of length word
//console.log(gameName.toUpperCase); // all leter are convert in capital
//console.log(gameName.toLowerCase); //all leter are convert into lower case

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.sunstring(0,4)
console.log(newString);

const anotherString = gameName.slice(-46,5)
console.log(newString);

const newStringOne = "Md Taushif Raja"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"


console.log(URL.replace('%20','-'));

console.log(URL.includes('sunder'));
console.log(gameName.split('-'));



