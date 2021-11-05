require("dotenv").config();
const Card = require("./models/card");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

let cards = [
  new Card({
    front: "what does css stand for?",
    back: "cascading style sheet",
  }),
  new Card({
    front: "what is Node.js?",
    back: "a javascript runtime environment",
  }),
  new Card({
    front: "what does array.map return?",
    back: "a new array",
  }),
  new Card({
    front: "what is closure in javascript?",
    back: "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.",
    tags:['JS']
  }),
  new Card({
    front: "what is a queue?",
    back: "A queue is an ordered collection of items where the addition of new items happens at one end, called the “rear,” and the removal of existing items occurs at the other end, commonly called the “front.",
    tags:['ADT']
  }),

];

const seedDb = async () => {
  try {
    await mongoose.connection.dropCollection("cards");
    cards.forEach(async function (card) {
      await card.save();
    });
    console.log("database seeded successfully");
  
  } catch (error) {
    console.log(error);
  }
};
seedDb();

async function closeConnection(){
    await mongoose.connection.close()
    console.log("db disconnect")
}
