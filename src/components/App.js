import React, { useState, useEffect } from "react";
// import * as from "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import RecipeInfo from "./RecipeInfo";
import NavBar from "./NavBar";
import ReplacementImage from "../images/replacement-image.png";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState({
    title: "test title",
    image: ReplacementImage,
    instructions: "test instructions",
  });

  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(async () => {
    try {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?number=8&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          const randomResults = response.data.recipes.map((recipe) => {
            const basicInfo = {
              cuisines: recipe.cuisines,
              id: recipe.id,
              title: recipe.title,
              image: recipe.image,
              dairyFree: recipe.dairyFree.toString(),
              glutenFree: recipe.glutenFree.toString(),
              occasions: recipe.occasions,
              readyInMinutes: recipe.readyInMinutes,
              pricePerServing: recipe.pricePerServing,
              vegan: recipe.vegan.toString(),
              vegetarian: recipe.vegetarian.toString(),
            };
            return basicInfo;
          });
          return setRandomRecipe(randomResults);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
