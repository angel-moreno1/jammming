import Track from '../Track/Track'
import './TrackList.css'

function TrackList({ tracks, isRemoval, onAdd, onRemove }) {
    return (
        <div className="TrackList">
            {
                tracks.map( song => <Track
                        key={song.id} 
                        {...song} 
                        isRemoval={isRemoval}
                        onAdd={onAdd}
                        onRemove={onRemove}
                     /> )
            }
        </div>
    )
}

export default TrackList