console.log("Hello i am Conditional tutorial")

let age = 1;
// let grace = 2;

// age += grace;

// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if(age > 18){
    console.log("You can Drive");
}
else if(age == 0){
    console.log("are you kidding?");
}
else if(age == 1){
    console.log("are you again kidding?");
}
else{
    console.log("You can not Drive");
}
let a = 6;
let b = 8;

let c = a>b ?(a-b):(b-a);

/*
Ternary statement
This Translate that 
if(a>b){
    a-b
}
if(b>a){
    b-a
}
*/