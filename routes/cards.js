const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {getUser} = require("./users");

// get all cards associated with a user
// /cards/:userId
router.get("/:userId", getUser, (req, res) => {
    res.json(res.user.cards);
  });

  //get a specific card by Id
  
  router.get("/:userId/:cardId", getUser, (req,res) => {
   
  
       let cards = res.user.cards
       let singleCard = cards.find(card => card.id === req.params.cardId )
         console.log(singleCard)
         if(singleCard === undefined){
            res.send("that card doesn't exist")
         }
        res.json(singleCard)
     
     
  })
module.exports = router;
