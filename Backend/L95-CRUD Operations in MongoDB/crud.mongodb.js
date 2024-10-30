//CRUD Operations
use("CrudDb")

// console.log(db)

//Create Collection
db.createCollection("courses")

//Insert data
// db.courses.insertOne({
//     name: "Harry web dev free course",
//     price: 0,
//     assignment: 12,
//     projects: 45
// })

// db.courses.insertMany([
//     {
//         "name": "Harry web dev free course",
//         "price": 0,
//         "assignment": 12,
//         "projects": 45
//     },
//     {
//         "name": "Intro to Python Programming",
//         "price": 0,
//         "assignment": 10,
//         "projects": 8
//     },
//     {
//         "name": "JavaScript Essentials",
//         "price": 15,
//         "assignment": 8,
//         "projects": 5
//     },
//     {
//         "name": "Data Science with R",
//         "price": 20,
//         "assignment": 15,
//         "projects": 12
//     },
//     {
//         "name": "Advanced CSS and Sass",
//         "price": 10,
//         "assignment": 6,
//         "projects": 10
//     },
//     {
//         "name": "React for Beginners",
//         "price": 25,
//         "assignment": 7,
//         "projects": 14
//     },
//     {
//         "name": "Machine Learning Basics",
//         "price": 30,
//         "assignment": 9,
//         "projects": 10
//     },
//     {
//         "name": "HTML & CSS Crash Course",
//         "price": 0,
//         "assignment": 4,
//         "projects": 2
//     },
//     {
//         "name": "Node.js Full Stack",
//         "price": 35,
//         "assignment": 12,
//         "projects": 20
//     },
//     {
//         "name": "SQL for Data Analysis",
//         "price": 0,
//         "assignment": 5,
//         "projects": 7
//     }
// ]   
// )

//Read data
// let a = db.courses.find({price: 0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let b = db.courses.findOne({price: 0})

// console.log(b)

//Update data

// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 0}, {$set:{price: 1000}})
//Delete data

// db.courses.deleteOne({price: 100})

// db.courses.deleteMany({price: 1000})