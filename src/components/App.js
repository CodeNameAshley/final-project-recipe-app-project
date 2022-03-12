import React, { useState, useEffect } from "react";

import axios from "axios";
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

  const [randomRecipe, setRandomRecipe] = useState([]);

  // useEffect(async () => {
  //   try {
  //     axios
  //       .get(
  //         "https://api.spoonacular.com/recipes/random?number=6&apiKey=d6a7928ebad041768568adf130dbde42"
  //       )
  //       .then((response) => {
  //         const randomResults = response.data.recipes.map((recipe) => {
  //           const basicInfo = {
  //             id: recipe.id,
  //             title: recipe.title,
  //             image: recipe.image,
  //           };
  //           return basicInfo;
  //         });
  //         return setRandomRecipe(randomResults);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

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
                ) : (
                  <SearchResults
                    results={randomRecipe}
                    selectRecipe={setSelectedRecipe}
                  />
                )}
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
