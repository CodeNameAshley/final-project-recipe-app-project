import React, { useState } from "react";
import PropTypes from "prop-types";
import * as ReactBootStrap from "react-bootstrap";
import GetRecipeList from "../requests/GetRecipeList";
import "../sassstyles/searchbar.scss";
import background from "../images/banner_image.png";

export default function SearchBar({ setSearchResults }) {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const recipes = await GetRecipeList(value);
      setSearchResults(recipes);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="searchBar">
      {loading && <ReactBootStrap.Spinner animation="border" />}
      <img
        src={background}
        alt="food background"
        className="searchBar-background"
      />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          disabled={loading}
          type="text"
          placeholder="Type your ingredients to find recipes"
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={loading} className="submitButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
