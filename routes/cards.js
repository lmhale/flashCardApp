const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {getUser} = require("./users");

// get all cards associated with a user
// /cards/:userId
router.get("/:userId", getUser, (req, res) => {
    res.json(res.user.cards);
  });

  // get a specific card by Id
//   router.get("/:userId/:cardId", getUser, (req,res) => {
//       let user = res.user
//       let card = user.findOne(req.params.cardId)
//       res.json(user)
//   })
module.exports = router;
