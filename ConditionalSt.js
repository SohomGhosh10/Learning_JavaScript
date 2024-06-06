let mode = "dark";
let color;

// if statements
if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);

// Else if statements

if(mode === "dark"){
    color = "black";
}else if(mode === "blue"){
    color = "blue";
}else if(mode === "pink"){
    color = "pink";
}else{
    color = "white";
}
console.log(color);

// Turnery operator

// condition ? true : false;

let ag = 25;

let result = ag >= 18? "True" : "False";
console.log(result);

// Switch Case

const v = "apple";
switch(v){
    case 'apple':
        console.log("Apple");
        break;
    case 'banana':
        console.log("Banana");
        break;
    default:
        console.log("Not found");
}

let num = prompt("Enter a number");

if(num % 5 === 0){
    console.log("It is divisible by 5");
}else{
    console.log("It is not divisible by 5");
}

let score = prompt("Enter your score");

if(score >= 90 && score <= 100){
    console.log("Grade A");
}else if(score >= 80 && score < 90){
    console.log("Grade B");
}else if(score >= 70 && score < 80){
    console.log("Grade C");
}else{
    console.log("Fail");
}