const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true})

const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required:[true, "Ples specify the Fruit name."]
  },
  rating: {
    type: Number,
    min:1,
    max:10
  },
  review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = mongoose.Schema({
  name: String,
  Age: Number,
  favouriteFruit: fruitSchema
});
const Person = mongoose.model("Person", personSchema);


  const kiwis = new Fruit({
    name: "Kiwi",
    rating: 9,
    review: "I do not remember the taste."
  });
  //kiwis.save();

  const person = new Person({
    name: "Jose Mathew",
    Age: 2053,
    favouriteFruit: kiwis
  });
  //person.save();

  Person.updateOne({name:"Jesus Christ"},{favouriteFruit:kiwis},function(err){
    if(err){
      console.log(err)
    } else {
      console.log("Sucessfully updated the record.");
    }
  })





  // Fruit.insertMany([Apples,Oranges], function(err){
  //   if(err)
  //     console.log(err);
  //   else
  //     console.log("Sucessfully inserted multiple records.")
  // })
  //fruit.save();

// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else{
//       mongoose.connection.close();
//       fruits.forEach(function(fruit){
//         console.log(fruit.name);
//       })
//     }
//   });

// Fruit.updateOne({_id:"5ea235405e3a4d4b90cf972d"},{name:"Orange"}, function(err){
//     if(err){
//       console.log(err)} else{
//         console.log("succesfully Updated the Record.")
//       }
//   })
//
// Person.deleteOne({_id:"5ea4d05aad8f325108d7551a"}, function(err){
//   if(err){
//     console.log(err)} else{
//       console.log("succesfully Deleted the Record.")
//     }
// })
