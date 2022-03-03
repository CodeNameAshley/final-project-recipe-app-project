/* eslint-disable */
import React, { useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";

function App() {
  const [SearchResults, setSearchResults] = useState([]);

  return (
    <div className='App'>
      <h1>Recipe App Project</h1>
      <SearchBar setSearchResults={setSearchResults} />

    </div>
  );
}

export default App;
