let marks = [98 , 88 , 92 , 77 , 65]
console.log(marks);
console.log(marks.length);
console.log(typeof marks);

// Traversing array using loops
let sec = ["A" , "B" , "C" , "D" , "E"];
for(let idx = 0; idx < sec.length; idx++){
    console.log(sec[idx]);
}

// using for of loop
for(let sd of sec){
    console.log(sd)
}

for(let iv of marks){
    console.log(iv);
    sum += iv;
}
avg = sum / marks.length;
console.log(`Sum of the marks is ${sum}`);
console.log(`Average of the marks is ${avg}`);

let abs = [250 , 300 , 270 , 450 , 500];
let index = 0
for(let evs of abs){
    console.log(`Value at index ${index} is ${evs}`);
    let offer = evs / 10;
    abs[index] = abs[index] - offer
    console.log(`Values after offer ${abs[index]}`) 
    index++;
}

// Array methods
console.log("3 types of array methods: push(), pop() , toString() , concat()")
let cricket = ["India" , "England" , "Australia" , "New Zealand" , "Pakistan"];

cricket.push("South Africa" , "Sri Lanka");
console.log(cricket);
console.log(cricket.length)
let deleted = cricket.pop();
console.log(cricket)
console.log(`Deleted ${deleted}`)
console.log(cricket.toString());

// Concat two arrays
let India = ["Rohit" , "Kohli" , "Surya" , "Pant" , "Bumrah"];
let Aus = ["Head" , "Smith" , "Marsh" , "Cummins" , "Starc"]
let cricket_Team = India.concat(Aus);
console.log(cricket_Team)

// unShift() ---> addes element at the start
cricket_Team.unshift("Jaiswal")
console.log(cricket_Team)

// shift() ---> removes element from start
Aus.shift();
console.log(Aus)

// slice() ---> for slicing of array
console.log(India.slice(1 , 4))

/* splice(startingIndex , delCount , newElement())
    startingIndex ---> From where array will be changed
    delCount ---> Number of element to be deleted
    newElement ---> If new element is added, it will be added to the places where we deleted any elements
*/

let arr = [1 , 2 , 3 , 4 , 5]
arr.splice(1 , 2 , 7 , 8 , 9)
console.log(arr)


