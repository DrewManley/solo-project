import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
// import { Component } from 'react';

// fetching recipes from the database, useState to store fetched data for parsing
// const useFetch = db => {
//   const [data, setData] = useState(null);
//   const fetched = async () => {
//     const response = await fetch(db);
//     const json = await response.json();
//     setData(json);
//   }

//useEffect to do something with it I'm not sure and need clarification
//   useEffect(() => {fetchData()}, [db]);

//   // return the new data we got from useState
//   return data;
// }

const RecipeContainer = ({ meatProp, vegProp, timeProp }) => {
  // data fetch with react hooks
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get('/api/test').then((res) => {
      setRecipe(res.data);
    });
  }, []);

  console.log(recipe);

  if (!recipe) return null;
  console.log('time in recipecontainer: ', typeof timeProp)
  console.log(recipe);
  let meatInput = meatProp;
  let vegInput = vegProp;
  let timeInput = Number(timeProp);

  console.log(meatInput, vegInput, timeInput);

  const recArray = [];
  const filtered = recipe.forEach((element) => {
      if (meatInput === element.meat) {
        if (vegInput === element.veg1 || vegInput === element.veg2 || vegInput === element.veg3) {
          if (timeInput >= element.time) recArray.push(element);
        }
      }
  });

  const mapped = recArray.map((element, i) => {
      return <div className='recipe-list' key={[i]}> <h3>{element.name}</h3> <p>{element.link}</p> </div>
  });
  return <div>{mapped}</div>;
};

export default RecipeContainer;
