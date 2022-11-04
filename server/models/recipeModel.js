const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  meat: { type: String, required: true },
  veg1: { type: String, required: true },
  veg2: { type: String, required: true },
  veg3: { type: String, required: true },  
  time: { type: Number, required: true },
  link: { type: String, required: false },
});

module.exports = mongoose.model('Recipe', recipeSchema);
