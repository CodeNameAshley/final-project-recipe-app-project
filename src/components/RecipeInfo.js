import React from "react";
import PropTypes from "prop-types";
import "../sass-styles/recipeinfo.scss";
import NavBar from "./NavBar";

export default function RecipeInfo({ result }) {
  const {
    cheap,
    dairyFree,
    furtherInstructions,
    image,
    instructions,
    summary,
    title,
  } = result;

  const yes = "🟢";
  const no = "🔴";

  const removeTags = (string) => {
    return string
      .replace(/<[^>]*>/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();
  };
  // const structuredSummary = summary.replace(/(<([^>]+)>)/gi, "");

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

            <div className="recipe-info__key-facts">
              <p>cheap: {cheap ? yes : no}</p>
              <p>dairy free: {dairyFree ? yes : no}</p>
            </div>

            <h1>summary</h1>
            <div className="recipe-info__summary">
              {summary && removeTags(summary)}
            </div>
            <h1 className="recipe-info__header">
              {`follow these ${
                furtherInstructions && furtherInstructions.length
              } steps below`}
            </h1>
            <div className="recipe-info__steps">
              <ol>
                {furtherInstructions &&
                  furtherInstructions.map((instruction) => (
                    <li key={instruction.step}>
                      {/* {instruction.number} */}
                      {instruction.step}
                    </li>
                  ))}
              </ol>
            </div>
            <div className="recipe-info__instructions">
              <h1> full instructions </h1>
              <div className="recipe-info__fullText">
                {removeTags(instructions)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RecipeInfo.propTypes = {
  result: PropTypes.shape({
    cheap: PropTypes.bool.isRequired,
    dairyFree: PropTypes.bool.isRequired,
    furtherInstructions: PropTypes.arrayOf(
      PropTypes.shape({
        // number: PropTypes.number,
        step: PropTypes.string,
      })
    ).isRequired,
    image: PropTypes.string,
    instructions: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
