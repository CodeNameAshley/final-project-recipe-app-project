import React, { useState } from "react";
import PropTypes from "prop-types";
import GetRecipeList from "../requests/GetRecipeList";
import "../sass-styles/searchbar.scss";

export default function SearchBar({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await GetRecipeList(value));
  };

  return (
    <div className="searchBar">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type your ingredients to find recipes"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submitButton" type="submit">
          feed me
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
