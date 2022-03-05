/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "../sassstyles/searchresults.scss";

export default function SearchResults({ data }) {
  return (
    <div className="search-results__main">
      <header className="search-results__header">
        check out these recipes below!
      </header>
      <div className="search-results__card">
        {data.map((recipe) => (
          <>
            <div className="search-results__title">{recipe.title}</div>
            <div>
              <img
                className="search-results__image"
                src={recipe.image}
                alt="the recipe"
              />
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
