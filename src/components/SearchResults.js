/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import RecipeCard from "./RecipeCard";
import GetRecipeList from "../requests/GetRecipeList";

export default function SearchResults({ basicInfo }) {
  return basicInfo.map((recipe) => {
      <>
        {/* <div>{recipe.title}</div>
        <div>{recipe.image}</div> */}
        <RecipeCard title={recipe.title} image={recipe.image} />
      </>

console.log(recipe.title)
  });

}

SearchResults.propTypes = {
    recipe: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
    }),
};
