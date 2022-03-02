/* eslint-disable */
import React from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className='App'>
      <p>Recipe App Project</p>
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
