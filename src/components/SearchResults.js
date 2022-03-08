import React from "react";
import PropTypes from "prop-types";
import "../sassstyles/searchresults.scss";
import RecipeCard from "./RecipeCard";

export default function SearchResults({ results, selectRecipe }) {
  return (
    <div className="search-results__main">
      <header className="search-results__header">
        check out these recipes below!
      </header>
      <div className="search-results__card">
        {results &&
          results.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              selectRecipe={selectRecipe}
            />
          ))}
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
