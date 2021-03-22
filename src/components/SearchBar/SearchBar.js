import './SearchBar.css'

function SearchBar({ onSearch }) {

    const search = term => {
        onSearch(term)
    }

    const handleTermChange = ({target}) => {
        search(target.value)
    }

    return (
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}

export default SearchBar