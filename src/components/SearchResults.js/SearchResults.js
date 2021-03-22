import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

function SearchResults({ searchResults, onAdd }) {
    return (
        <div className="SearchResults">
            <h2 style={{ textAlign: "center" }}>{searchResults.length > 0 ? "Results" : "No Results"}</h2>
            <TrackList 
                tracks={searchResults}
                isRemoval={false}
                onAdd={onAdd}
            />
        </div>
    )
}


export default SearchResults