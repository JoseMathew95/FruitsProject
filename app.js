const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true})

  const fruitSchema = mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

  const Apples = new Fruit({
    name: "Apples",
    rating: 7,
    review: "Not bad, also healthy."
  });

  const Oranges = new Fruit({
    name: "Oranges",
    rating: 8,
    review: "I like it. "
  });

  // Fruit.insertMany([Apples,Oranges], function(err){
  //   if(err)
  //     console.log(err);
  //   else
  //     console.log("Sucessfully inserted multiple records.")
  // })
  //fruit.save();


const personSchema = mongoose.Schema({
  name: String,
  Age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "Jesus Christ",
  Age: 2053
});
//person.save();

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
      mongoose.connection.close();
      fruits.forEach(function(fruit){
        console.log(fruit.name);
      })
    }
  });
