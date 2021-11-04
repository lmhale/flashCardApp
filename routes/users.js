const express = require("express");
const router = express.Router();
const User = require("../models/user");

//get all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get one
router.get("/:userId", getUser, (req, res) => {
  res.json(res.user);
});
//create one
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    cards: req.body.cards
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//update one
router.patch("/:userId", getUser, async (req, res) => {
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    try{
const updatedUser = await res.user.save()
res.json(updatedUser)
    }catch(error){
        res.status(400).json({message:error.message})
    }
});
//delete one
router.delete("/:userId", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted User" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//middleware
 async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.userId);
    if (user == null) {
      //exit function if user does not exist
      return res.status(404).json({ message: "Cannot Find User" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}

module.exports = {
    router,
    getUser
}

