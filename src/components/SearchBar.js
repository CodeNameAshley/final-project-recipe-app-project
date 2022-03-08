import React, { useState } from "react";
import PropTypes from "prop-types";
import GetRecipeList from "../requests/GetRecipeList";
import "../sassstyles/searchbar.scss";
import background from "../images/banner_image.png";

export default function SearchBar({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await GetRecipeList(value));
  };

  return (
    <div className="searchBar">
      <img
        src={background}
        alt="food background"
        className="searchBar-background"
      />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type your ingredients to find recipes"
          onChange={(e) => setValue(e.target.value)}
        />
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
