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
