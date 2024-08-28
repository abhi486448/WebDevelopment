console.log("harry")

// let boxes = document.getElementsByClassName("box")

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

console.log(document.getElementsByTagName("div"))

let e = document.getElementsByTagName("div");

console.log(e[4].matches("#redbox"))

// console.log(e[4].closest("#redbox"))
console.log(document.querySelector(".container").contains(e[2]))