/* eslint-disable */
import React, { useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import data from "../data/data.json";
import NavBar from "./NavBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <SearchResults data={data} />
    </div>
  );
}

export default App;
