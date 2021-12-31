import React from 'react';
import './searchResults.css'

function SearchResultsItems() {
    return (
        <div>
            <div className='search-result'>
                <div className='left'>
                    <img src='https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg' alt='Foto de super Héroe' />
                </div>
                <div className='right'>
                    <h1>Batman</h1>
                    <div className='stats'>
                        <div>strength: 26</div>
                        <div>power: 47</div>
                        <div>speed: 27</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsItems;