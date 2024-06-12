// Function to print name

function myName(){
    console.log("Sohom Ghosh");
}

myName();

// function to print sum of 2 numbers

function sum1(a , b){
    s = a + b
}

sum1(1 , 2);

// Arrow functions

const ArrowFunc = (a , b) => {
    console.log(a + b)
}

const ArrowFun = (a , b) =>{
    console.log(a * b)
}

const print = () =>{
    console.log("Hello")
}

function vowel(str){
    let count = 0
    for(let s of str){
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
            count++;
        }
    }
    return count;
}

vowel("Hello");

const vowCheck = (str) => {
    let count = 0
    for(let s of str){
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
            count++;
        }
    }
    return count;
}
vowCheck("Hello");

// forEach loop ---> One function is passed as an argument of another function
// Also called callBack function

let avr = [1 , 2 , 3 , 4 , 5]

avr.forEach(function myFunction(val){
    console.log(val)
});

// using ArrowFunction

avr.forEach((val , idx , avr) => {
    console.log(val , idx , avr);
});

let sqr = [1 , 2 , 3 , 4 , 5]

sqr.forEach(function printSqr(val){
    console.log(val ** 2)
});

// Other way of defining forEach loop in ArrowFunction

const printSquare = (sqr , idx) => {
    console.log(sqr ** 2 , idx);
}

sqr.forEach(printSquare)

// map() function

let nums = [10 , 20 , 30 , 40 , 50]

let printNum = nums.map((val) =>{
    return val;
});

console.log(printNum)

// filter() function

let arrr = [1 , 2 , 3 , 4 , 5 , 6 , 7]

let printArr = arrr.filter((val) =>{
    return val % 2 === 0
})

console.log(printArr)

let p = [10 , 20 , 30 , 40 , 50]

let printP = p.map((val) => {
    return val
});

console.log(printP)

let m = [100 , 120 , 50 , 30 , 99 , 91]

let score90 = m.filter((val) =>{
    return val >= 90
});

console.log(score90)
