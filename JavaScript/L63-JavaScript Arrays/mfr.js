let arr = [1 ,4 ,6 ,9,8];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e,index,arr)=>{
    return e**2
})
console.log(newArr)
const graterThenSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(graterThenSeven))

let arr2 = [1,2,3,4,5,6]
const red =(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))
console.log(Array.from("Harry"))