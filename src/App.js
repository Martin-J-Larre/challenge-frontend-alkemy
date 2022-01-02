import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";


function App() {
    const [searchText, setSearchText] = useState('');
    const [superHeroeData, setSuperHeroeData] = useState([]);

    async function searchSuperHeroes() {
        const response = await fetch(`https://www.superheroapi.com/api.php/5002360783121771/search/${searchText}`);
        const data = await response.json();
        console.log("SearchSuperHeroes --> data: ", data);

        setSuperHeroeData(data.results);
    }

    function handleChange(e) {
        const searchTerm = e.target.value;

        setSearchText(searchTerm);
        if (searchTerm.length === 0) {
            setSuperHeroeData([])
        }
        if (searchTerm.length > 3) {
            searchSuperHeroes();
        }
    }
    return (
        <div className="App">
            <Navbar />
            <div className='main'>
                <SearchBar searchText={searchText} handleChange={handleChange}/>
                <SearchResults superHeroeData={superHeroeData} />
            </div>
        </div>
    )
}

export default App;
