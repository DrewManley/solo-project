// const { Router } = require('express');
const express = require('express');
const router = express.Router();
const gatherController = require('../controllers/gatherController');

router.get('/', (req, res) => {
  res.json([
    {
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
    },{
      "_id": {
        "$oid": "6361b39900ad34459b04a6d9"
      },
      "name": "Beef Stroganoff",
      "meat": "beef",
      "veg1": "mushrooms",
      "veg2": "onion",
      "time": 20,
      "link": "https://www.allrecipes.com/recipe/14626/ground-beef-stroganoff/"
    },{
      "_id": {
        "$oid": "6361b39900ad34459b04a6da"
      },
      "name": "Instant Pot Goulash",
      "meat": "beef",
      "veg1": "mushrooms",
      "veg2": "onion",
      "veg3": "",
      "time": 40,
      "link": "https://www.allrecipes.com/recipe/264297/instant-pot-goulash/"
    },{
      "_id": {
        "$oid": "6361b39900ad34459b04a6db"
      },
      "name": "Beef Stuffed Bell Peppers",
      "meat": "beef",
      "veg1": "bell pepper",
      "veg2": "tomatoes",
      "time": 120,
      "link": "https://www.allrecipes.com/recipe/222002/chef-johns-stuffed-peppers/"
    },{
      "_id": {
        "$oid": "6361b39900ad34459b04a6dc"
      },
      "name": "Taco Bake Casserole",
      "meat": "beef",
      "veg1": "black beans",
      "time": 20,
      "link": "https://www.allrecipes.com/recipe/254819/taco-bake-casserole/"
    },{
      "_id": {
        "$oid": "6361b86d00ad34459b04a6dd"
      },
      "name": "Chicken Enchiladas",
      "meat": "chicken",
      "veg1": "bell pepper",
      "veg2": "onion",
      "veg3": "tomatoes",
      "time": 30,
      "link": "https://www.allrecipes.com/recipe/285073/ultimate-creamy-chicken-enchiladas/"
    },{
      "_id": {
        "$oid": "6361b86d00ad34459b04a6de"
      },
      "name": "Chicken and Brocolli Stirfry",
      "meat": "chicken",
      "veg1": "Brocolli",
      "veg2": "ginger",
      "time": 15,
      "link": "https://www.allrecipes.com/recipe/283019/chicken-and-broccoli-stir-fry/"
    },{
      "_id": {
        "$oid": "6361b86d00ad34459b04a6df"
      },
      "name": "Chicken Pot Pie",
      "meat": "chicken",
      "veg1": "green beans",
      "veg2": "corn",
      "veg3": "carrot",
      "time": 50,
      "link": "https://www.allrecipes.com/recipe/284460/easy-flavorful-chicken-pot-pie/"
    },{
      "_id": {
        "$oid": "6361b86d00ad34459b04a6e0"
      },
      "name": "Chicken Fajitas",
      "meat": "chicken",
      "veg1": "bell pepper",
      "veg2": "onion",
      "veg3": "tomatoes",
      "time": 30,
      "link": "https://www.allrecipes.com/gallery/top-new-chicken-recipes-of-2021/"
    },{
      "_id": {
        "$oid": "6361b86d00ad34459b04a6e1"
      },
      "name": "Buffalo Chicken Dip",
      "meat": "chicken",
      "veg1": "green onion",
      "veg2": "garlic",
      "time": 120,
      "link": "https://www.allrecipes.com/recipe/284604/the-best-buffalo-chicken-dip/"
    },{
      "_id": {
        "$oid": "6361bb4c00ad34459b04a6e2"
      },
      "name": "Stir Fried Tofu with Mushrooms",
      "meat": "tofu",
      "veg1": "mushrooms",
      "veg2": "bell pepper",
      "veg3": "onion",
      "time": 15,
      "link": "https://www.allrecipes.com/recipe/278824/mushroom-tofu-and-noodle-stir-fry/"
    },{
      "_id": {
        "$oid": "6361bb4c00ad34459b04a6e3"
      },
      "name": "Seasame Tofu with Teriyaki Vegetables",
      "meat": "tofu",
      "veg1": "bell pepper",
      "veg2": "onion",
      "time": 30,
      "link": "https://www.allrecipes.com/recipe/277328/easy-sesame-tofu-with-teriyaki-vegetables/"
    },{
      "_id": {
        "$oid": "6361bb4c00ad34459b04a6e4"
      },
      "name": "Spicy Baked Tofu",
      "meat": "tofu",
      "veg1": "green pepper",
      "veg2": "ginger",
      "veg3": "onion",
      "time": 40,
      "link": "https://www.allrecipes.com/recipe/241802/spicy-baked-marinated-tofu/"
    },{
      "_id": {
        "$oid": "6361bb4c00ad34459b04a6e5"
      },
      "name": "Tofu Burgers",
      "meat": "tofu",
      "veg1": "onion",
      "time": 25,
      "link": "https://www.allrecipes.com/recipe/18415/tofu-burgers/"
    },{
      "_id": {
        "$oid": "6361bb4c00ad34459b04a6e6"
      },
      "name": "Coconut Red Curry with Tofu",
      "meat": "tofu",
      "veg1": "carrot",
      "veg2": "bell pepper",
      "veg3": "green onion",
      "time": 70,
      "link": "https://www.allrecipes.com/recipe/275581/coconut-red-curry-with-tofu/"
    }
  ]);
});

module.exports = router;
