for(let i = 0; i<=5; i++){
    console.log("Sohom Ghosh");
}

// sum of n natural numbers

console.log("Sum of n natural numbers")
let n = prompt("Enter a number");
let sum = 0;

for(let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log("Sum is: " + sum);

let i = 1;
while(i <= 10){
    console.log("Sohom Ghosh");
    i++;
}

// Do-while loop
let g = 20;
do{
    console.log("Sohom Ghosh");
    g++;
}while(g <= 10);

// for-of loop

let str = "SohomGhosh";
let size = 0;
for(let val of str){
    console.log("Val = " + val);
    size++;
}
console.log(size);

// for-in loop

let std = {
    nam : "Sohom Ghosh",
    sec : "CSE",
    cgpa : 8.6
};

for(let v in std){
    //console.log(v); // returns the keys
    console.log("Key is " + v + " and value is " + std[v]);
}

// Guessing game

let alpha = 25;

let res = prompt("Guess a number");

while(res != alpha){
    res = prompt("You guessed it wrong!!");
}
console.log("Congratulations!! you guessed it correct");