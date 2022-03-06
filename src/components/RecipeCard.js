import React from "react";
import PropTypes from "prop-types";
import "../sassstyles/recipecard.scss";

export default function RecipeCard(props) {
  const { title, image } = props;
  return (
    <div className="recipe-card">
      <div className="recipe-card__title">{title.toLowerCase()}</div>
      <div>
        <img className="recipe-card__image" src={image} alt="recipe" />
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
