import React from "react";
import PropTypes from "prop-types";
import "../sass-styles/searchresults.scss";
import RecipeCard from "./RecipeCard";
import replacementImage from "../images/replacement-image.png";

export default function SearchResults({ results, selectRecipe }) {
  console.log(results);
  const headerMessage = "check out these recipes below!";
  const noResultsMessage = "Oh no there are no recipes in our cookbook!";

  return (
    <div className="search-results__main">
      <header className="search-results__header">{headerMessage}</header>
      <div className="search-results__card">
        {results && results.length === 0 ? (
          <p>{noResultsMessage}</p>
        ) : (
          results.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                cuisines={recipe.cuisines}
                dairyFree={recipe.dairyFree}
                glutenFree={recipe.glutenFree}
                id={recipe.id}
                image={recipe.image ? recipe.image : replacementImage}
                missedIngredientCount={recipe.missedIngredientCount}
                occasions={recipe.occasions}
                pricePerServing={recipe.pricePerServing}
                readyInMinutes={recipe.readyInMinutes}
                title={recipe.title}
                usedIngredientCount={recipe.usedIngredientCount}
                vegan={recipe.vegan}
                vegetarian={recipe.vegetarian}
                selectRecipe={selectRecipe}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  selectRecipe: PropTypes.func.isRequired,
};
