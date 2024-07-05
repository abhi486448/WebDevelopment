let a = Number(prompt("Enter your first name:"));
console.log(a);
let b = Number(prompt("Enter your second name:"));
console.log(b);
let randum = Math.random();
if(randum>0.1){
    console.log("a + b : " + (a-b));
    console.log("a * b : " + (a+b));
    console.log("a - b : " + (a/b));
    console.log("a / b : " + (a**b));
}
else{
    console.log("a + b : " + (a+b));
    console.log("a * b : " + (a*b));
    console.log("a - b : " + (a-b));
    console.log("a / b : " + (a/b));
}