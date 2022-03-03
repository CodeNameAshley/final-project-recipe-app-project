import React from "react";
import PropTypes from "prop-types";

export default function RecipeCard(props) {
  const { title, image } = props;
  return (
    <div className="recipe__card">
      {image}
      {title}
    </div>
  );
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
