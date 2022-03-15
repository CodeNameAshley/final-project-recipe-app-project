/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
import React from "react";
import PropTypes, { number } from "prop-types";
import "../sass-styles/recipecard.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RecipeCard({
  cuisines,
  dairyFree,
  glutenFree,
  id,
  image,
  missedIngredientCount,
  occasions,
  pricePerServing,
  readyInMinutes,
  selectRecipe,
  title,
  usedIngredientCount,
  vegan,
  vegetarian,
}) {
  const recipeURL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&includeInstructions=true&apiKey=${process.env.REACT_APP_API_KEY}`;

  const handleClick = (event) => {
    event.preventDefault();
    axios.get(`${recipeURL}`).then((response) => {
      const details = {
        cheap: response.data.cheap,
        dairyFree: response.data.dairyFree,
        diets: response.data.diets,
        extendedIngredients: response.data.extendedIngredients,
        furtherInstructions: response.data.analyzedInstructions[0].steps,
        glutenFree: response.data.glutenFree,
        image: response.data.image,
        instructions: response.data.instructions,
        pricePerServing: response.data.pricePerServing,
        readyInMinutes: response.data.readyInMinutes,
        servings: response.data.servings,
        summary: response.data.summary,
        sustainable: response.data.sustainable,
        title: response.data.title,
        vegan: response.data.vegan,
        vegetarian: response.data.vegetarian,
      };
      console.log(details);
      return selectRecipe(details);
    });
  };

  const formatCuisines = (cuisine) => {
    let formattedCuisines;
    if (cuisine.length >= 1) {
      formattedCuisines = `🗺️cuisines: ${cuisine.join(", ")}`;
    } else if (cuisine.length < 1) {
      formattedCuisines = null;
    }
    return formattedCuisines;
  };

  let dietaryInfo;

  if (vegetarian && glutenFree && dairyFree) {
    dietaryInfo = "🌱vegetarian, 🌾gluten free & 🧀dairy free";
  } else if (vegetarian && dairyFree) {
    dietaryInfo = "🌱vegetarian & 🧀dairy free";
  } else if (vegetarian && glutenFree) {
    dietaryInfo = "🌱vegetarian & 🌾gluten free";
  } else if (vegetarian) {
    dietaryInfo = "🌱vegetarian";
  } else if (vegan && glutenFree) {
    dietaryInfo = "🐄vegan & 🌾gluten free";
  } else if (vegan) {
    dietaryInfo = "🐄vegan";
  } else {
    dietaryInfo = null;
  }

  const formatMissedIngredients = (missedIngredient) => {
    let formattedIngredient;
    if (missedIngredient > 1) {
      formattedIngredient = `🛒missed ingredient: ${missedIngredient} items`;
    } else if (missedIngredient === 1) {
      formattedIngredient = `🛒missed ingredient: ${missedIngredient} item`;
    } else {
      formattedIngredient = null;
    }

    return formattedIngredient;
  };

  const formatOccasions = (occasion) => {
    let formattedOccasion;
    if (occasion.length >= 1) {
      formattedOccasion = `🎉 occasion: ${occasions.join(", ")}`;
    } else if (occasion.length < 1) {
      formattedOccasion = null;
    }
    return formattedOccasion;
  };

  const formatPrice = (price) => {
    const finalPrice = Math.round(price);
    let formattedPrice;
    if (finalPrice > 99) {
      formattedPrice = `💰price per serving: £${(finalPrice / 100).toFixed(2)}`;
    } else if (finalPrice <= 99 && finalPrice !== 0) {
      formattedPrice = `💰price per serving: 0.${finalPrice}p`;
    } else {
      formattedPrice = null;
    }
    return formattedPrice;
  };

  const formatTime = (time) => {
    const hours = time / 60;
    const timeInHours = Math.floor(hours);
    const minutes = (hours - timeInHours) * 60;
    const timeInMinutes = Math.round(minutes);

    let servingTime;

    if (timeInHours === 0 && timeInMinutes > 0) {
      servingTime = `⏲️ ready in: ${timeInMinutes} mins`;
    } else if (timeInMinutes === 0 && timeInHours > 0) {
      servingTime = `⏲️ ready in: ${timeInHours} hours`;
    } else if (timeInHours > 0 && timeInMinutes > 0) {
      servingTime = `⏲️ ready in: ${timeInHours} hours and ${timeInMinutes} mins`;
    } else {
      servingTime = null;
    }

    return servingTime;
  };

  const formatUsedIngredients = (usedIngredient) => {
    let formattedIngredient;
    if (usedIngredient > 1) {
      formattedIngredient = `🍳used ingredient: ${usedIngredient} items`;
    } else if (usedIngredient === 1) {
      formattedIngredient = `🍳used ingredient: ${usedIngredient} item`;
    } else {
      formattedIngredient = null;
    }
    return formattedIngredient;
  };

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
            <p>{formatTime(readyInMinutes)}</p>
            <p>{formatPrice(pricePerServing)}</p>
            <p>{formatCuisines(cuisines)}</p>
            <p>{formatOccasions(occasions)}</p>
            <p>{formatMissedIngredients(missedIngredientCount)}</p>
            <p>{formatUsedIngredients(usedIngredientCount)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  cuisines: PropTypes.arrayOf(PropTypes.string),
  dairyFree: PropTypes.string,
  glutenFree: PropTypes.string,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  missedIngredientCount: PropTypes.number,
  occasions: PropTypes.arrayOf(PropTypes.string),
  pricePerServing: PropTypes.number,
  readyInMinutes: PropTypes.number,
  selectRecipe: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  usedIngredientCount: PropTypes.number,
  vegan: PropTypes.string,
  vegetarian: PropTypes.string,
};

RecipeCard.defaultProps = {
  cuisines: [],
  dairyFree: "",
  glutenFree: "",
  missedIngredientCount: 0,
  occasions: [],
  pricePerServing: 0,
  readyInMinutes: 0,
  usedIngredientCount: 0,
  vegan: "",
  vegetarian: "",
};
