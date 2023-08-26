import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

//some test comment

class App extends React.Component {


  render() {
    return (<div>
        <h1>Ja<span className="highlight">asdf</span>ing</h1>
        <div className="App">
          <SearchBar />

        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
      </div>)
    
  }
}

export default App;
