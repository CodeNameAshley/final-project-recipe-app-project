import React, { useState } from "react";
import GetRecipeList from "../requests/GetRecipeList";

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
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submitButton" type="submit">Search</button>
      </form>
    </div>
  );
};