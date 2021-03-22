import { useState } from 'react'
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults.js/SearchResults';
import './App.css';
import Spotify from '../../util/Spotify'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playListName, setPlayListName] = useState('My Play List')
  const [playListTracks, setPlayListTracks] = useState([])

  const addTrack = track => {
    const alreadyInPlayList = playListTracks.filter(song => song.id === track.id).length === 1
    if(alreadyInPlayList) return
    setPlayListTracks([...playListTracks, track])
  }

  const removeTrack = track => {
    const newPlayList = playListTracks.filter(song => song.id !== track.id)
    setPlayListTracks([...newPlayList])
  }

  const updatePlayListName = name => {
    setPlayListName(name)
  }

  const savedPlayList = () => {
    const trackUris = playListTracks
    console.log("saved: ")
    console.log(trackUris)
  }

  const search = term => {
    Spotify.search(term)
      .then( tracks => setSearchResults(tracks) )
  }
  // console.log(Spotify.savePlayList("s", "ss"))

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <SearchBar 
          onSearch={search}
          />
          <div className="App-playlist">
            <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack}
            />
            <Playlist 
              searchResults={searchResults} 
              playListName={playListName} 
              playListTracks={playListTracks}
              onRemove={removeTrack}
              onNameChange={updatePlayListName}
              onSave={savedPlayList}
            />
          </div>
      </div>
    </div>
  );
}

export default App;
