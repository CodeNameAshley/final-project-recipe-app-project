import React from "react";
import PropTypes from "prop-types";
import "../sass-styles/recipeinfo.scss";
import NavBar from "./NavBar";

export default function RecipeInfo({ result }) {
  const { image, title, instructions, furtherInstructions } = result;
  console.log(furtherInstructions);

  const structuredInstructions = instructions.replace(/(<([^>]+)>)/gi, "");

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
            <h1 className="recipe-info__header">
              {`follow these ${
                furtherInstructions && furtherInstructions.length
              } steps below`}
            </h1>
            <div>
              <h1>step by step</h1>
              {furtherInstructions &&
                furtherInstructions.map((instruction) => (
                  <li key={instruction.step}>
                    {/* {instruction.number} */}
                    {instruction.step}
                  </li>
                ))}
            </div>
            <div className="recipe-info__instructions">
              <h1>summary</h1>
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
    furtherInstructions: PropTypes.arrayOf({
      number: PropTypes.number,
      step: PropTypes.string,
    }).isRequired,
    instructions: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
