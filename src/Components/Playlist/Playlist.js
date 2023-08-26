import React from "react";
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {
    render(){
        return(
        <div className="Playlist">
        <input value="New Playlistasdfasdfa"/>
        <h1>TEst</h1>
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
      )
    }
}

export default Playlist