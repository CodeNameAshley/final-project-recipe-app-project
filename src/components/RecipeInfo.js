import React from "react";
import PropTypes from "prop-types";
import "../sass-styles/recipeinfo.scss";
import NavBar from "./NavBar";

export default function RecipeInfo({ result }) {
  const { image, title, instructions } = result;
  console.log(instructions);
  // const regEx = /\r?\n/;
  const structuredInstructions = instructions.replace(/(<([^>]+)>)/gi, "");

  // const newInfo = structuredInstructions.split(".");

  return (
    <div className="recipe-info">
      <div className="recipe-info__background">
        <NavBar />
        <div>
          <div>
            <div className="recipe-info__details">
              <div className="recipe-info__title">{title.toLowerCase()}</div>
              <img className="recipe-info__image" src={image} alt={title} />
            </div>
            <h1 className="recipe-info__header">follow these steps below</h1>
            <div className="recipe-info__instructions">
              <div className="recipe-info__text">{structuredInstructions}</div>
            </div>
          </div>
        </div>
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
