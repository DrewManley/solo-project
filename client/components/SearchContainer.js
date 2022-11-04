import React, { useState } from 'react';
import RecipeContainer from './RecipeContainer';

// All of the ingredient submission forms
const SearchContainer = () => {
  // need to get text from input buttons for filtering recipes
  const [meat, setMeat] = useState('');
  const [veg, setVeg] = useState('');
  const [time, setTime] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    
    console.log({ meat, veg, time });

    // setMeat('');
    // setVeg('');
    // setTime('');
  }

  // Each
  return (
    <div className="centered">
      <h2>Ingredients on hand</h2>
      <div>
        <form onSubmit={onSubmit}>
          <div className="submit-section">
            <label>Protein</label>
            <input
              type="text"
              placeholder="Enter proteins"
              value={meat}
              onChange={(e) => setMeat(e.target.value)}
            ></input>
          </div>
          <div className="submit-section">
            <label>Vegetables</label>
            <input
              type="text"
              placeholder="Enter vegetables"
              value={veg}
              onChange={(e) => setVeg(e.target.value)}
            ></input>
          </div>
          <div className="submit-section">
            <label>Cook Time</label>
            <input
              type="number"
              placeholder="How long do you have (minutes)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>
          <input
            type="submit"
            value="Search"
            className="btn search-btn"
          />
        </form>
      </div>
      <RecipeContainer meatProp={meat} vegProp={veg} timeProp={time}/>
    </div>
  );
};

export default SearchContainer;
