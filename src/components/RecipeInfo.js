import React from "react";
import PropTypes from "prop-types";

export default function RecipeInfo({ result }) {
  const { image, title, instructions } = result;

  return (
    <div className="recipe-info">
      <div className="recipe-info__title">{title}</div>
      <div className="recipe-info__image">{image}</div>
      <div className="recipe-info__instructions">{instructions}</div>
    </div>
  );
}

RecipeInfo.propTypes = {
  result: PropTypes.shape({
    instructions: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
