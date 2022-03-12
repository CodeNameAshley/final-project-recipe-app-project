import React, { useState } from "react";
import PropTypes from "prop-types";
import GetRecipeList from "../requests/GetRecipeList";
import "../sass-styles/searchbar.scss";

export default function SearchBar({ setSearchResults }) {
  const [value, setValue] = useState();

  const initialValue = [];
  const [ingredients, setIngredients] = useState(initialValue);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (ingredients.length >= 5) {
      setSearchResults(await GetRecipeList(ingredients));
    } else {
      alert("min 5 ingredients");
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

  const handleDelete = () => {
    const oldArr = [...ingredients];

    const Arr = oldArr.splice(-1, 1);
    console.log(Arr);

    setIngredients(oldArr);
  };
  console.log(ingredients);
  return (
    <div className="search-bar__main">
      <div className="search-chip-div">
        <div className="chip__main">
          <div className="chip-and-button">
            {ingredients.map((ingredient) => (
              <div className="chipButton" key={ingredient}>
                <div className="chip__ingredient">{ingredient}</div>
                &nbsp;
                <button
                  type="button"
                  className="chip__delete"
                  onClick={handleDelete}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            value={value}
            type="text"
            placeholder="Type your ingredients to find recipes"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="submitButton"
            type="button"
            onClick={handleAddItem}
          >
            Add
          </button>
          <button className="submitButton" type="submit">
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
