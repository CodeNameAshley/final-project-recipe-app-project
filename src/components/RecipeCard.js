/* eslint-disable no-bitwise */
import React from "react";
import PropTypes, { number } from "prop-types";
import "../sass-styles/recipecard.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RecipeCard({
  dairyFree,
  glutenFree,
  id,
  image,
  pricePerServing,
  readyInMinutes,
  selectRecipe,
  title,
  vegan,
  vegetarian,
}) {
  const recipeURL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&includeInstructions=true&apiKey=${process.env.REACT_APP_API_KEY}`;

  const handleClick = (event) => {
    event.preventDefault();
    axios.get(`${recipeURL}`).then((response) => {
      console.log(response);
      const details = {
        title: response.data.title,
        image: response.data.image,
        instructions: response.data.instructions,
      };
      console.log(details);
      return selectRecipe(details);
    });
  };

  let dietaryInfo;

  if (vegetarian && glutenFree && dairyFree) {
    dietaryInfo = "vegetarian, gluten free & dairy free";
  } else if (vegetarian && dairyFree) {
    dietaryInfo = "vegetarian & dairy free";
  } else if (vegetarian && glutenFree) {
    dietaryInfo = "vegetarian & gluten free";
  } else if (vegetarian) {
    dietaryInfo = "vegetarian";
  } else if (vegan && glutenFree) {
    dietaryInfo = "vegan & gluten free";
  } else if (vegan) {
    dietaryInfo = "vegan";
  }

  const price = `${(Math.floor(pricePerServing) / 10) ^ 0}p`;
  const hours = readyInMinutes / 60;
  const timeInHours = Math.floor(hours);
  const minutes = (hours - timeInHours) * 60;
  const timeInMinutes = Math.round(minutes);

  let servingTime;

  if (timeInHours === 0) {
    servingTime = `ready in: ${timeInMinutes} mins`;
  } else if (timeInMinutes === 0) {
    servingTime = `ready in: ${timeInHours} hours`;
  } else {
    servingTime = `ready in: ${timeInHours} hours and ${timeInMinutes} mins`;
  }

  return (
    <div
      className="recipe-card__main"
      key={number.toString(id)}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex="0"
    >
      <Link to="/recipeinfo">
        <div className="recipe-card__image-info">
          <img className="recipe-card__image" src={image} alt={title} />
          <div className="recipe-card__title">{title.toLowerCase()}</div>
          <div className="recipe-card__extra-info">
            <p>{dietaryInfo}</p>
            <p>{servingTime}</p>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  dairyFree: PropTypes.bool.isRequired,
  glutenFree: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  pricePerServing: PropTypes.number.isRequired,
  readyInMinutes: PropTypes.number.isRequired,
  selectRecipe: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  vegan: PropTypes.bool.isRequired,
  vegetarian: PropTypes.bool.isRequired,
};
