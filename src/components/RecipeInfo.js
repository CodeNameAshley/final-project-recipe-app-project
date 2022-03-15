/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable array-callback-return */
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

  console.log(winePairing);

  const yes = "🟢";
  const no = "🔴";

  const removeTags = (string) => {
    return string
      .replace(/<[^>]*>/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();
  };

  const formatDishTypes = (dish) => {
    let formattedDishTypes;

    if (dish.length === 1) {
      formattedDishTypes = `🍽️dish type: ${dish.toString()}`;
    } else if (dish.length > 1) {
      formattedDishTypes = `dish type: ${dish.join(", ")}`;
    } else {
      formattedDishTypes = null;
    }

    return formattedDishTypes;
  };

  const formatPairingDescription = (wineString) => {
    let formattedPairingDesc;
    if (wineString) {
      formattedPairingDesc = `📝pairing description: ${wineString}`;
    } else {
      formattedPairingDesc = null;
    }
    return formattedPairingDesc;
  };

  const formatPairingMatch = (matchArray) => {
    let formattedPairingMatch;
    if (matchArray) {
      matchArray.map((match) => {
        const matchInfo = {
          description: match.description,
          price: match.price,
          title: match.title,
        };
        formattedPairingMatch = `title: ${matchInfo.title}, price: ${matchInfo.price}, description ${matchInfo.description}`;
      });
    } else {
      formattedPairingMatch = null;
    }
    return formattedPairingMatch;
  };

  const formatPairedWines = (winesArray) => {
    let formattedWines;
    if (winesArray && winesArray.length === 1) {
      formattedWines = `🍾paired wines: ${winesArray.toString()}`;
    } else if (winesArray && winesArray.length > 1) {
      formattedWines = `🍾paired wines: ${winesArray.join(", ")}`;
    } else {
      formattedWines = null;
    }
    return formattedWines;
  };

  const formatPrice = (price) => {
    const finalPrice = Math.round(price);
    let formattedPrice;
    if (finalPrice > 99) {
      formattedPrice = `£${(finalPrice / 100).toFixed(2)}`;
    } else if (finalPrice <= 99 && finalPrice !== 0) {
      formattedPrice = `0.${finalPrice}p`;
    } else {
      formattedPrice = null;
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

  const formatUnit = (unit) => {
    let formattedUnit;
    if (unit > 1) {
      formattedUnit = "pieces";
    } else if (unit === 1) {
      formattedUnit = "piece";
    } else {
      formattedUnit = null;
    }

    return formattedUnit;
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

            <h1>key points</h1>
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
                          {ingredient.name}: {Math.ceil(ingredient.amount)}{" "}
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
                  {winePairing && formatPairedWines(winePairing.pairedWines)}
                  <br />
                  {winePairing &&
                    formatPairingDescription(winePairing.pairingText)}
                  <br />
                  {winePairing & formatPairingMatch(winePairing)}
                </div>
                <div className="recipe-info__dish-types">
                  {dishTypes && formatDishTypes(dishTypes)}
                </div>
              </div>
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
