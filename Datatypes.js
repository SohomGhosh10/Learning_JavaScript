console.log("There are 7 primitive datatypes");
console.log("Number , String , Boolean , Undefined , Null , BigInt , Symbol");

let ab = 100;
//typeof ab; to check datatype of ab that is 'Number'
let price = 110.50; // number
let bc = "Jiniya"; // String
let isfollow = true // boolean
let x; // undefined
let y = null; // typeof y is 'object'

const student = {
   name : "Sohom Ghosh",
   age : 20,
   cgpa : 9.4  
}; 

// typeof student is 'object'
console.log(student.name); // console.log(student["name"]);
console.log(student.age); // console.log(student["age"]);
console.log(student.cgpa); // console.log(student["cgpa"]);

student.age = student.age + 1
console.log(student.age);