import React, { useState } from "react";
import PropTypes from "prop-types";
import GetRecipeList from "../requests/GetRecipeList";
import "../sassstyles/searchbar.scss";
import background from "../images/banner_image.png";

export default function SearchBar({ setSearchResults }) {
  const [value, setValue] = useState();

  const initialValue = [];
  const [ingredients, setIngredients] = useState(initialValue);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await GetRecipeList(value));
  };

  const handleAddItem = () => {
    if (value) {
      setIngredients([...ingredients, value]);
      setValue("");
    }
  };

  console.log(ingredients);
  return (
    <div className="searchBar">
      <img
        src={background}
        alt="food background"
        className="searchBar-background"
      />
      <div>
        <h1>chips</h1>
        <div>
          {
          ingredients.map((ingredient) => <p>{ingredient}</p>)
}

        </div>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          value={value}
          type="text"
          placeholder="Type your ingredients to find recipes"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submitButton" type="button" onClick={handleAddItem}>
          Add
        </button>
        <button className="submitButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
