/* eslint-disable */
import React, { useState } from "react";
import "../styles/App.css";
import RecipeInfo from "./RecipeInfo";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import data from "../data/data.json"

function App() {
  const [SearchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <h1>Recipe App Project</h1>
      <SearchBar />
      <SearchResults data = {data}/>
    </div>
  );
}

export default App;
