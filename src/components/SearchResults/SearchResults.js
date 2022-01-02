import React from 'react';
import './searchResults.css'
import SearchResultsItems from './SearchResultsItem';

function SearchResults(props) {
    const {superHeroeData = []} = props;
    console.log('superHeroeData -----> from results', superHeroeData);
    return (
        <div>
            {superHeroeData.map(superheroe => <SearchResultsItems data={superheroe} />)}
            
        </div>
    )
}

export default SearchResults
