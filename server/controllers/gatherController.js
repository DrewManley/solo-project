const Recipe = require('../models/recipeModel');
const express = require('express');

const gatherController = {};

// get all of the recipes for filtering
gatherController.getAllRecipes = (req, res, next) => {
  Recipe.find({}, (err, recipes) => {
    if (err) return next('Error in recipeGather: ' + JSON.stringify(err));
    res.locals.cookbook = recipes;
    // console.log(res.locals.cookbok);
    return next();
  });
};

// filter out recipes to return
// gatherController.recipeReturn = async (req, res, next) => {
//   try {
//     const { name, meat, veg1, veg2, veg3, time, link } = req.body;
//     const filter = await Recipe.find({ meat, veg1, veg2, veg3, time, link }, 'name link').exec();
//     res.locals.filtered = filter;
//     console.log(res.locals.filtered);
//     return next();
//   }
//   catch {
//     return next();
//   }
// };