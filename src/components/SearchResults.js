/* eslint-disable */
import React from "react";
import PropTypes, { number } from "prop-types";
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
            <>
              <div>
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  selectRecipe={selectRecipe}
                />
              </div>
            </>
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
  ),
  selectRecipe: PropTypes.func.isRequired,
};
