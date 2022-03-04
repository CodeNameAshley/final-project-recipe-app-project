/* eslint-disable */
import React from "react";
import "../styles/App.css";
import RecipeInfo from "./RecipeInfo";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className="App">
      <h1>Recipe App Project</h1>
      <SearchBar />
      <SearchResults />
      <RecipeInfo
        title="Lasagna"
        image="https://www.pexels.com/photo/lasagna-on-white-ceramic-plate-4079520/"
        readyInMinutes={45}
        servings={4}
        original="lorem ipsum"
      />
    </div>
  );
}

export default App;
