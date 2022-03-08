/* eslint-disable */
import React, { useState } from "react";
import PropTypes, { number } from "prop-types";
import "../sassstyles/recipecard.scss";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import RecipeInfo from "./RecipeInfo";

export default function RecipeCard({ id, title, image, selectRecipe }) {
  const recipeURL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&includeInstructions=true&apiKey=6a3d81f73aae4b83983232ca23a0e9b1`;

  const handleClick = (event) => {
    event.preventDefault();
    axios.get(`${recipeURL}`).then((response) => {
      const details = {
        title: response.data.title,
        image: response.data.image,
        instructions: response.data.instructions,
      };
      console.log(details);
      return selectRecipe(details);
    });
  };

  //  use the link to load the Info page
  return (
    <>
      <div
        className="recipe-card"
        key={number.toString(id)}
        onClick={handleClick}
      >
        <Link to="/recipeinfo">
          <div>
            <img className="recipe-card__image" src={image} alt="recipe" />
          </div>
          <div className="recipe-card__title">{title.toLowerCase()}</div>
        </Link>
      </div>
    </>
  );
}

// RecipeCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   selectRecipe: PropTypes.func().isRequired,
// };
