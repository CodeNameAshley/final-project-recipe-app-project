/* eslint-disable */
import React from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className='App'>
      <h1>Recipe App Project</h1>
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
