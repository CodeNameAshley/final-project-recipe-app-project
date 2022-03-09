import React from "react";
import PropTypes from "prop-types";

export default function RecipeInfo({ result }) {
  const { image, title, instructions } = result;
  console.log(instructions);

  return (
    <div className="recipe-info">
      <img className="recipe-info__image" src={image} alt={title} />
      <div className="recipe-info__title">{title.toLowerCase()}</div>
      <h1>follow these steps below</h1>
      <div className="recipe-info__instructions">
        <p>{instructions}</p>
      </div>
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
