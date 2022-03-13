import React from "react";
import PropTypes from "prop-types";
import "../sass-styles/searchresults.scss";
import RecipeCard from "./RecipeCard";
import replacementImage from "../images/replacement-image.png";

export default function SearchResults({ results, selectRecipe }) {
  const headerMessage = "check out these recipes below!";
  const noResultsMessage = "Oh no there are no recipes in our cookbook!";

  return (
    <div className="search-results__main">
      <header className="search-results__header">{headerMessage}</header>
      <div className="search-results__card">
        {results && results.length === 0 ? (
<<<<<<< HEAD
          <p>{noResultsMessage}</p>
=======
          <p>No results found</p>
>>>>>>> origin/master
        ) : (
          results.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              dairyFree={recipe.dairyFree}
              glutenFree={recipe.glutenFree}
              id={recipe.id}
              image={recipe.image ? recipe.image : replacementImage}
              pricePerServing={recipe.pricePerServing}
              readyInMinutes={recipe.readyInMinutes}
              title={recipe.title}
              vegan={recipe.vegan}
              vegetarian={recipe.vegetarian}
              selectRecipe={selectRecipe}
            />
          ))
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
