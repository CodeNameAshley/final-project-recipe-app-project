import React, { useState } from "react";
import PropTypes from "prop-types";
import GetRecipeList from "../requests/GetRecipeList";
import "../sassstyles/searchbar.scss";
import "../styles/chips.css";
import background from "../images/banner_image.png";

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

  const handleDelete = (ingredient) => {
    const oldArr = [...ingredients];
    const Arr = oldArr.filter((item) => item !== ingredient);
    console.log(Arr);
    setIngredients(Arr);
  };

  console.log(ingredients);
  return (
    <div className="searchBar">
      <img
        src={background}
        alt="food background"
        className="searchBar-background"
      />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          value={value}
          type="text"
          placeholder="Type your ingredients to find recipes"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="submitButton" type="button" onClick={handleAddItem}>
          Add
        </button>
        <button className="submitButton" type="submit">
          Search
        </button>
      </form>
      <span>
        {
          ingredients.map((ingredient) => <div className="chip" key={ingredient}>
            {ingredient}
&nbsp;
            <button type="button" className="chip-delete" onClick={handleDelete}>
              x
            </button>
          </div>)
          }
      </span>
    </div>
  );
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
