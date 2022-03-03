/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

export default function SearchResults({ data }) {
  return data.map((recipe) => {
    return (
      <>
        <div>{recipe.title}</div>
        <div>{recipe.image}</div>
      </>
    );
  });
}

SearchResults.propTypes = {
  data: PropTypes.array({
    recipe: PropTypes.object({
      title: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
};
