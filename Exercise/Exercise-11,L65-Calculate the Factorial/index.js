//Fectorial of 6

//by reduce
let Fectof6 = [6,5,4,3,2,1]
const red =(a,b)=>{
    return a*b
}
console.log(Fectof6.reduce(red))

//by for loop
var element = 1;
for (let index = 0; index < Fectof6.length; index++) {
    element=element*Fectof6[index];
}
console.log(element)