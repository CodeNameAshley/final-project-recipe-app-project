/* eslint-disable */
import React, { useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import NavBar from "./NavBar";

function App() {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="App">
      <NavBar />
      <SearchBar setSearchResults={setSearchResults} />
      {searchResults ? <SearchResults results={searchResults} /> : null}
    </div>
  );
}

export default App;
