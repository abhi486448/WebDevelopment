function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you tshirt is nice!")
    console.log("Hey " + name + " you course is good!")
    console.log("Hey " + name + " you are nice!")
}

// nice("Rohan")

// nice("shivam")

function sum(a, b, c=3) {
    // console.log(a+b)  
    return a+b+c
}

result1 = sum(4,8)
result2 = sum(7,5)
result3 = sum(12,2,1)

console.log("Sum of these number is: ",result1)
console.log("Sum of these number is: ",result2)
console.log("Sum of these number is: ",result3)

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}

func1(34);
func1(66);
func1(84);