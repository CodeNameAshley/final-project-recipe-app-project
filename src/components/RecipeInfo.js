/* eslint-disable no-bitwise */
import React from "react";
import PropTypes from "prop-types";
import "../sass-styles/recipeinfo.scss";
import NavBar from "./NavBar";

export default function RecipeInfo({ result }) {
  const {
    cheap,
    dairyFree,
    diets,
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

  const formatPrice = (price) => {
    const finalPrice = `${(Math.floor(price) / 10) ^ 0}`;
    let formattedPrice;
    if (finalPrice.length > 3) {
      formattedPrice = `£${finalPrice}`;
    } else {
      formattedPrice = `0.${finalPrice}p`;
    }
    return formattedPrice;
  };

  const formatTime = (time) => {
    const hours = time / 60;
    const timeInHours = Math.floor(hours);
    const minutes = (hours - timeInHours) * 60;
    const timeInMinutes = Math.round(minutes);

    let servingTime;

    if (timeInHours === 0) {
      servingTime = `ready in: ${timeInMinutes} mins`;
    } else if (timeInMinutes === 0 && timeInHours === 1) {
      servingTime = `ready in: ${timeInHours} hour`;
    } else if (timeInMinutes === 0) {
      servingTime = `ready in: ${timeInHours} hours`;
    } else {
      servingTime = `ready in: ${timeInHours} hours and ${timeInMinutes} mins`;
    }

    return servingTime;
  };

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
              <p>💲 cheap: {cheap && cheap ? yes : no}</p>
              <p>🧀 dairy free: {dairyFree && dairyFree ? yes : no}</p>
              <p>🥗 diets: {diets && diets.join(", ")}</p>
              <p>
                📜 no. of ingredients:{" "}
                {extendedIngredients && extendedIngredients.length} items
              </p>
              <p>🌾 gluten free: {glutenFree && glutenFree ? yes : no}</p>
              <p>💰 price: {formatPrice(pricePerServing)}/serving</p>
              <p>⏲️{formatTime(readyInMinutes)}</p>
              <p>👨‍👩‍👧‍👦 serves: {servings} people</p>
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
                          {/* {instruction.number} */}
                          {ingredient.name}
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
                    return (
                      <li key={instruction.step}>
                        {/* {instruction.number} */}
                        {instruction.step}
                      </li>
                    );
                  })}
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
    cheap: PropTypes.bool,
    dairyFree: PropTypes.bool,
    diets: PropTypes.arrayOf(PropTypes.string),
    extendedIngredients: PropTypes.arrayOf(PropTypes.string),
    furtherInstructions: PropTypes.arrayOf(
      PropTypes.shape({
        // number: PropTypes.number,
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
  }).isRequired,
};
