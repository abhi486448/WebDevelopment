use('sigma');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([

  {
    "name": "Java",
    "price": 20000,
    "instructor": "Harry"
  },
  {
    "name": "Python",
    "price": 18000,
    "instructor": "Alice"
  },
  {
    "name": "JavaScript",
    "price": 22000,
    "instructor": "Bob"
  },
  {
    "name": "C#",
    "price": 21000,
    "instructor": "Eve"
  },
  {
    "name": "Ruby",
    "price": 19000,
    "instructor": "Charlie"
  }


]);


// Print a message to the output window.
console.log(`Done Inserting data`);
