console.dir(window)
console.dir(window.document)
console.dir(document.body)
console.log(document.body)
console.dir(document.head)
console.log(document.head)

// DOM Manipulation

let header = document.getElementById("header")
console.log(header)
console.dir(header)

let heading = document.getElementsByClassName("heading")
console.log(heading)
console.dir(heading)

let button = document.getElementById("myId")
console.dir(button)
console.log(button)

let paras = document.getElementsByTagName("p");
console.dir(paras)
console.log(paras)

// query selector returns nodeList
let firstElement = document.querySelector("p");
console.log(firstElement)

let allElement = document.querySelectorAll("p");
console.log(allElement)

firstElement.tagName
header.tagName

document.querySelector("div")
document.querySelector("div").childNodes
