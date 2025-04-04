//DataTypes

// 01 #Primitive dataTypes 
 // 7 Types: string, Number, Boolean, Null, Underfined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.33

 const isLoggedIn = false
 const outsideTemp = null
let userEmail;  //undefined value;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);

const bigNumber = 154265562653n 
console.table([ score,scoreValue,isLoggedIn,outsideTemp,id,anotherId,bigNumber]);


 //02 #Non Primituve DataTypes(TReference)
// Array, Objects, Functions

const heros = ["shaktiman", "ironman","nagaraj", "daga"];
 // always Object under the curlie bases two pairs key and value
let myObj = {  
    name:"Md Taushif Raja",
    age:21,
}

const myFunction = function(){
     console.log("hello world");
}
console.table([typeof heros,myFunction]);