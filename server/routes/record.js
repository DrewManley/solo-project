const express = require('express');
const Recipe = require('../models/recipeModel')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let recipes = await Recipe.find({});
    res.status(200).json([{
      "_id": {
        "$oid": "6361b1b600ad34459b04a6d8"
      },
      "name": "Vegetable Beef Soup",
      "meat": "beef",
      "veg1": "carrot",
      "veg2": "onion",
      "veg3": "green beans",
      "time": 60,
      "link": "https://www.allrecipes.com/recipe/14602/easy-vegetable-beef-soup-with-ground-beef/"
    }]);
  }
    catch {
      res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = router;