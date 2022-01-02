import './searchBar.css'

function SearchBar(props) {
    const { handleChange, searchText} = props;
    return (
        <div>
            <input  type='search'
                    placeholder='Elige tu superhéroe aquí'
                    onChange={ handleChange }
                    value={ searchText }
            />
        </div>
    )
}

export default SearchBar
