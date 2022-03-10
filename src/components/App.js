import React, { useState } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import RecipeInfo from "./RecipeInfo";
import NavBar from "./NavBar";

function App() {
  const [searchResults, setSearchResults] = useState();
  const [selectedRecipe, setSelectedRecipe] = useState({
    title: "test title",
    image: "test image",
    instructions: "test instructions",
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <SearchBar setSearchResults={setSearchResults} />
                {searchResults ? (
                  <SearchResults
                    results={searchResults}
                    selectRecipe={setSelectedRecipe}
                  />
                ) : null}
              </>
            }
          />
          <Route
            path="/recipeinfo"
            element={<RecipeInfo result={selectedRecipe} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
