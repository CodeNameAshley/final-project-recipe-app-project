import React, { useState } from "react";
import PropTypes from "prop-types";
import * as ReactBootStrap from "react-bootstrap";
import GetRecipeList from "../requests/GetRecipeList";
import "../sass-styles/searchbar.scss";

export default function SearchBar({ setSearchResults }) {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const initialValue = [];
  const [ingredients, setIngredients] = useState(initialValue);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (ingredients.length >= 5) {
        setLoading(true);
        const recipes = await GetRecipeList(ingredients);
        setSearchResults(recipes);
        console.log(recipes);
      } else {
        alert("min 5 ingredients");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = () => {
    if (value) {
      if (!ingredients.includes(value)) {
        setIngredients([...ingredients, value]);
      }
      setValue("");
    }
  };

  // const handleDelete = () => {
  //   const oldArr = [...ingredients];
  //   const Arr = oldArr.splice(-1, 1);
  //   console.log(Arr);
  //   setIngredients(oldArr);
  // };

  return (
    <div className="search-bar__main">
      {loading && <ReactBootStrap.Spinner animation="border" />}
      <div className="search-chip-div">
        <div className="chip__main">
          <div className="chip-and-button">
            {ingredients.map((ingredient, index) => (
              <div className="chipButton" key={ingredient}>
                <div className="chip__index">{index + 1}</div>
                <div className="chip__ingredient">{ingredient}</div>
                &nbsp;
                <button
                  type="button"
                  className="chip__delete"
                  onClick={() => {
                    const arr = [...ingredients];
                    arr.filter((items) => items.index !== index);
                    arr.splice(index, 1);
                    console.log(arr);
                    setIngredients(arr);
                  }}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-bar__form-addButton">
            <input
              className="search-input"
              disabled={loading}
              value={value}
              type="text"
              placeholder="type your ingredients to find recipes"
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="search-bar__add"
              type="button"
              onClick={handleAddItem}
            >
              Add
            </button>
          </div>
          <button
            className="submitButton"
            type="submit"
            onSubmit={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
