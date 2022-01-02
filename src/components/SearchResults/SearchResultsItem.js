import React from 'react';
import './searchResults.css'

function SearchResultsItems(props) {
    const { data } = props;
    console.log('data', data);
    return (
        <div>
            <div className='search-result'>
                <div className='left'>
                    <img src={data.image.url} alt='super pic' />
                </div>
                <div className='right'>
                    <h1>{data.name}</h1>
                    <div className='stats'>
                        <div>strength: {data.powerstats.strenght}</div>
                        <div>power: {data.powerstats.power}</div>
                        <div>speed: {data.powerstats.speed}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsItems;