/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

export default function RecipeInfo(props) {
  const { image, original, readyInMinutes, servings, title } = props;

  return (
    <div className="recipe-info">
      <div className="recipe-info__title">{title}</div>
      <div className="recipe-info__image">{image}</div>
      <div className="recipe-info__minutes">{readyInMinutes}</div>
      <div className="recipe-info__servings">{servings}</div>
      <div className="recipe-info__original">{original}</div>
    </div>
  );
}

RecipeInfo.propTypes = {
  image: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
  readyInMinutes: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
