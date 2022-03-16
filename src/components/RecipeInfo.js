/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable array-callback-return */
import React from "react";
import PropTypes from "prop-types";
import "../sass-styles/recipeinfo.scss";
import NavBar from "./NavBar";
import {
  formatDiets,
  formatDishTypes,
  formatPairingDescription,
  formatPairingMatch,
  formatPairedWines,
  formatPrice,
  formatServings,
  formatTime,
  formatUnit,
  removeTags,
} from "../formatting-functions/formattingFunctions";

export default function RecipeInfo({ result }) {
  const {
    cheap,
    dairyFree,
    diets,
    dishTypes,
    extendedIngredients,
    furtherInstructions,
    glutenFree,
    image,
    instructions,
    pricePerServing,
    readyInMinutes,
    servings,
    summary,
    sustainable,
    title,
    vegan,
    vegetarian,
    winePairing,
  } = result;

  const yes = "🟢";
  const no = "🔴";

  return (
    <div className="recipe-info">
      <NavBar />
      <div>
        <div>
          <div className="recipe-info__title-image">
            <div className="recipe-info__title">{title.toLowerCase()}</div>
            <img className="recipe-info__image" src={image} alt={title} />
          </div>

          <h1>key points</h1>
          <div className="recipe-info__key-facts">
            <p>💲 cheap: {cheap && cheap ? yes : no}</p>
            <p>🧀 dairy free: {dairyFree && dairyFree ? yes : no}</p>
            <p>{diets && formatDiets(diets)}</p>
            <p>
              📜 no. of ingredients:{" "}
              {extendedIngredients && extendedIngredients.length} items
            </p>
            <p>🌾 gluten free: {glutenFree && glutenFree ? yes : no}</p>
            <p>{formatPrice(pricePerServing)}</p>
            <p>{formatTime(readyInMinutes)}</p>
            <p>{formatServings(servings)}</p>
            <p>🌳 sustainable: {sustainable && sustainable ? yes : no}</p>
            <p>🐄 vegan: {vegan && vegan ? yes : no}</p>
            <p>🌱 vegetarian: {vegetarian && vegetarian ? yes : no}</p>
          </div>

          <div className="">
            <h1>ingredients</h1>
            <div className="recipe-info__ingredients-list">
              <ul>
                {extendedIngredients &&
                  extendedIngredients.map((ingredient) => {
                    return (
                      <li key={ingredient.id}>
                        ◾{ingredient.name}: {Math.ceil(ingredient.amount)}{" "}
                        {ingredient.unit
                          ? ingredient.unit.toLowerCase()
                          : formatUnit(ingredient.amount)}
                      </li>
                    );
                  })}
              </ul>
            </div>
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
                furtherInstructions.map((instruction) => {
                  return <li key={instruction.step}>{instruction.step}</li>;
                })}
            </ol>
          </div>

          <div>
            <h1>dish types and wine pairing</h1>
            <div className="recipe-info__dish-wine">
              <div>
                <p>
                  {winePairing && formatPairedWines(winePairing.pairedWines)}
                </p>
                <p>
                  {winePairing &&
                    formatPairingDescription(winePairing.pairingText)}
                </p>
                <p>
                  {winePairing &&
                    formatPairingMatch(winePairing.productMatches)}
                </p>
              </div>
              <div className="recipe-info__dish-types">
                <p>{dishTypes && formatDishTypes(dishTypes)}</p>
              </div>
            </div>
          </div>

          <div className="recipe-info__instructions">
            <h1>full instructions</h1>
            <div className="recipe-info__fullText">
              {removeTags(instructions)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RecipeInfo.propTypes = {
  result: PropTypes.shape({
    cheap: PropTypes.bool,
    dairyFree: PropTypes.bool,
    diets: PropTypes.arrayOf(PropTypes.string),
    dishTypes: PropTypes.arrayOf(PropTypes.string),
    extendedIngredients: PropTypes.arrayOf(PropTypes.shape()),
    furtherInstructions: PropTypes.arrayOf(
      PropTypes.shape({
        step: PropTypes.string,
      })
    ),
    glutenFree: PropTypes.bool,
    image: PropTypes.string,
    instructions: PropTypes.string,
    pricePerServing: PropTypes.number,
    readyInMinutes: PropTypes.number,
    servings: PropTypes.number,
    summary: PropTypes.string,
    sustainable: PropTypes.bool,
    title: PropTypes.string,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    winePairing: PropTypes.shape({
      pairedWines: PropTypes.arrayOf(PropTypes.string),
      pairingText: PropTypes.string,
      productMatches: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          price: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};
