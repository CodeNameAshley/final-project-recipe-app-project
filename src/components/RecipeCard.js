import React from "react";
import PropTypes, { number } from "prop-types";
import "../sass-styles/recipecard.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RecipeCard({ id, title, image, selectRecipe }) {
  const recipeURL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&includeInstructions=true&apiKey=d6a7928ebad041768568adf130dbde42`;

  const handleClick = (event) => {
    event.preventDefault();
    axios.get(`${recipeURL}`).then((response) => {
      const details = {
        title: response.data.title,
        image: response.data.image,
        instructions: response.data.instructions,
      };
      return selectRecipe(details);
    });
  };

  return (
    <div
      className="recipe-card"
      key={number.toString(id)}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex="0"
    >
      <Link to="/recipeinfo">
        <div>
          <img className="recipe-card__image" src={image} alt={title} />
        </div>
        <div className="recipe-card__title">{title.toLowerCase()}</div>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  selectRecipe: PropTypes.func.isRequired,
};
