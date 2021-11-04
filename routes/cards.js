const express = require("express");
const router = express.Router();
const Card = require("../models/card");
// const {getUser} = require("./users");

// get all cards 
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:cardId", findCard, (req,res) => {
  res.json(res.card)
})

//create a card
router.post("/", async (req, res) => {
  const card = new Card({
    front: req.body.front,
    back: req.body.back,
    tags: req.body.tags
  });
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//update a card
router.put("/:cardId", findCard, async (req, res) => {
  let card = res.card
  try{
   
      card.front =req.body.front || card.front
      card.back =req.body.back || card.back
      card.tags = req.body.tags || card.tags
      card.isActive =req.body.isActive || card.isActive
      card.isCorrect = req.body.isCorrect || card.isCorrect
      card.timesSeen = req.body.timesSeen || card.timesSeen
  
   const updatedCard  = await res.card.save()
res.json(updatedCard)
  }catch(error){
      res.status(400).json({message:error.message})
  }
});

//delete a card by Id
router.delete("/:cardId", findCard, async (req, res) => {
  try {
    await res.card.remove();
    res.json({ message: "Deleted Card" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//middleware
async function findCard(req, res, next) {
  let card;
  try {
   card = await Card.findById(req.params.cardId);
    if (card == null) {
      //exit function if user does not exist
      return res.status(404).json({ message: "Cannot Find Card" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.card = card;
  next();
}
module.exports = router;
