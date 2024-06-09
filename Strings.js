let s = "Sohom Ghosh";
console.log(s);

abd = "Sohom Ghosh"
for(let int of abd){
    console.log(int);
}

let obj = {
    cost : 10,
    item : 2
};

//for(let ve in obj){
//    console.log("Cost of obj: " + obj.cost);
//    console.log("Items taken: " + obj.item);
//}

//String Interpolation syntax:
// let str = `Stringtext ${expression} Stringtext`

console.log("Cost of obj " + obj.cost + " items taken " + obj.item);
let output = `Cost of ${obj.item} is ${obj.cost} rupees`; // String Interpolation
console.log(output);
console.log(typeof abd);
let o = `The sum of 1 2 3 is ${1+2+3}`;
console.log(o);
console.log(typeof o);

//Escape characters:
// \n ---> for nextline
// \t ---> for tab space

console.log("Sohom \n Ghosh"); // nextline
console.log("Sohom\tGhosh"); // tab space

// String Methods ---->

console.log("String Methods:");
let ar = "SohomGhosh";
ar = ar.toUpperCase();
console.log(ar);

ar = ar.toLowerCase();
console.log(ar);

let xy = "      SohomGhosh      ";
xy = xy.trim();
console.log(xy);

// string slicing
console.log(ar.slice(1 , 8));

// string concat
let str1 = "UEM";
let str2 = "Kolkata";
console.log(str1.concat(str2));

// string replace
console.log(str1.replace("U" , "I"));

// string charAt
console.log(str1.charAt(0));

let str3 = "SohomGhosh"; // @SohomGhosh10
str3 = str3.replace("S" , "@S");
let str4 = "10";
console.log(str3.concat(str4));

