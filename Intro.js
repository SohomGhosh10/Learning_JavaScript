alert("Welcome to JS");

console.log("I am Sohom")
console.log("Learning Js")

var a = prompt("Enter a number")

console.log("Your number is " + a)

var isTrue = confirm("Do you want to leave this site?")

if(isTrue){
    console.log("You successfully left this site")
}
else{
    console.log("You are still there")
}
var age = 10;
console.log(age) // using var we can redeclare and update the values of variable
/*
var age = 20
var age = 30*/

let d = 100; // using let we can declare the variable only once but can be updated

console.log(d);
let c;
console.log(c); // ----> it will print undefined as no value is initialized

const b = 10; // It is a constant value for the particular variable assigned
// const variable must be initialized
console.log(b);
