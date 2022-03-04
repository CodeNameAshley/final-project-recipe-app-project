/* eslint-disable */
import React, { useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import GetRecipeList from "../requests/GetRecipeList";
// import data from "../data/data.json"

function App() {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  console.log(setSearchResults);

  return (
    <div className="App">
      <h1>Recipe App Project</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <SearchResults basicInfo={searchResults} />
    </div>
  );
}

export default App;
