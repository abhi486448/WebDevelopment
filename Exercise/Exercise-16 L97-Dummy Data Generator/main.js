const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employes')

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr) =>{
  let rno = Math.floor(Math.random() * (arr.length - 1))
  return arr[rno]
}

app.get('/', (req, res) => {
  console.log("Hey its index")
  res.render('index', {foo: 'FOO'});
})

app.get('/generate', async (req, res) =>{

  await Employee.deleteMany({})


  let randomName = ["Ramu", "Himesh", "Sahil", "Suresh", "Kokila", "Karan", "Rahul", "Sivam"];
  let randomLang = ["Java", "Pythen", "C++"];
  let randomCity = ["Rewa", "Satna", "Jabalpur"];

  for (let index = 0; index <10; index++) {
    let e = await Employee.create({
      name: getRandom(randomName),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCity),
      isManager:  (Math.random()>0.5)?true:false
    })
    
  e.save
    console.log(e)
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})