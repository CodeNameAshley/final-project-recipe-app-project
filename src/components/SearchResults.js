/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "../sassstyles/searchresults.scss";
import RecipeCard from "./RecipeCard";

export default function SearchResults({ results }) {
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
                <RecipeCard key={recipe.id} image={recipe.image} title={recipe.title} />
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};
