import TrackList from '../TrackList/TrackList'
import './Playlist.css'

function Playlist({playListName, playListTracks, onRemove, onNameChange, onSave}) {

    const handleNameChange = event => {
        const newName = event.target.value
        onNameChange(newName)
    }

    return (
        <div className="Playlist">
            <div className="edit-playlist-name">
            <input 
                value={playListName} 
                spellCheck={false} 
                onChange={handleNameChange}
            />
            <svg width="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            </div>
            <TrackList 
                tracks={playListTracks} 
                isRemoval={true}
                onRemove={onRemove}
            />
            <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist