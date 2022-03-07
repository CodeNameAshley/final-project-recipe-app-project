import React, { useState } from "react";
import PropTypes, { number } from "prop-types";
import "../sassstyles/recipecard.scss";
import {
  BrowserRouter as Router, Link, Route, Routes,
} from "react-router-dom";
import axios from "axios";
import RecipeInfo from "./RecipeInfo";

export default function RecipeCard(props) {
  const {
    id, title, image,
  } = props;

  const initialState = {
    food:'',
  };

  const recipeURL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&includeInstructions=true&apiKey=6a3d81f73aae4b83983232ca23a0e9b1`;

  const [food, setFood] = useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    axios.get(`${recipeURL}`)
      .then((response) => {
        const fullRecipe = response.data;
        console.log(response);
        return setFood(fullRecipe);
      });
  };

  console.log(food);
  //  use the link to load the Info page
  return (
    <Router>
      <div className="recipe-card" key={number.toString(id)}>
        <Link to="/recipeinfo" onClick={handleClick}>
          <div className="recipe-card__title">{title.toLowerCase()}</div>
          <div>
            <img className="recipe-card__image" src={image} alt="recipe" />
          </div>
        </Link>
      </div>
      <Routes>
        <Route exact path="/recipeinfo" element={<RecipeInfo food={food} />} />
      </Routes>
    </Router>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
