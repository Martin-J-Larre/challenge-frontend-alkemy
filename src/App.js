import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <SearchResults />

    </div>
  );
}

export default App;
