let a = prompt("Enter your first name:");
console.log(a);
let c = prompt("Enter your operation");
console.log(c);
let b = prompt("Enter your second name:");
console.log(b);

let randum = Math.random();

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(randum>0.1){
    c = obj[c]
    alert(`The Result is ${eval(` ${a} ${c} ${b} `)}`);
    console.log(`The Result is ${eval(` ${a} ${c} ${b} `)}`);
}
else{
    alert(`The Result is ${eval(` ${a} ${c} ${b} `)}`);
    console.log(`The Result is ${eval(` ${a} ${c} ${b} `)}`);
}