import './Track.css'
import { useRef, useState } from 'react'

function Track({ isRemoval, name, artist, album, id, onAdd, onRemove, preview_url  }) {

    const [isPlayed, setIsPlayed] = useState(false)
    const audioRef = useRef(null)

    const addTrack = () => onAdd({
        name: name,
        artist: artist,
        album: album,
        id: id,
        preview_url: preview_url
    })

    const removeTrack = () => onRemove({
        name: name,
        artist: artist,
        album: album,
        id: id,
        preview_url: preview_url
    })

    const handlePlayAndPause = () => {
        if(isPlayed) {
            audioRef.current.pause()
        }else {
            document.querySelectorAll("audio").forEach( audio => audio.pause() )
            audioRef.current.play()
        }
        setIsPlayed( prev => !prev)
    }

    const handleEnded = () => {
        audioRef.current.currentTime = 0
        setIsPlayed(false)
    }

    return (
        <div className="Track">
            <div className="img-container">
                <img width="100%" src={album.images[0].url} />
            </div>
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist} | {album.name}</p>
            </div>
            {preview_url && 
                <div>
                    {
                    isPlayed 
                    ? <svg onClick={handlePlayAndPause} xmlns="http://www.w3.org/2000/svg"  className="play" width="2rem" height="2rem" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    : <svg onClick={handlePlayAndPause} className="play" width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                    } 
                    <audio onEnded={handleEnded} ref={audioRef} src={preview_url}></audio>
                </div>
            }
            <button onClick={isRemoval ? removeTrack : addTrack}  className="Track-action">{ isRemoval ? "-" : "+" }</button>
        </div>
    )
}

export default Track