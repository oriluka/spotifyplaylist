import React from 'react';
import axios from 'axios';
import Spotify from 'spotify-web-api-js';
import Search from './Search.jsx';

// import the rest of the components

const spotifyApi = new Spotify();

class App extends React.Component {

  constructor(props) {
    super(props);

    const params = this.getHashParams();

    this.state = {
      loggedIn: params.access_token ? true: false,
      accessToken: null,
      refreshToken: null,
      playlist: [],
      playlistName: '',
      playlistSize: '',
      artist: '',
      song: '',
      search: [];
    }
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token);
    }
  }

  // Get tokens
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  searchInputChange(query) {
    let types = ['artist', 'track'];
    spotifyApi.search(query, types, {limit: 3}, (err, res) => {
      // If succeeded, display results as one enters in query.

      // set search state
      this.setState({
        search: res
      })
    })
  }

  render() {

    if (!this.state.loggedIn) {
      return (
      <div className="playlistbuilder">
        <a href='http://localhost:4444/login'>
          <button>Login with Spotify</button>
        </a>
      </div>
      )
    } else {
      return (
        <div>
          <div className="search-artist-and-song">
            <h3>Lets's get started!</h3>
            <Search searchInputChange={searchInputChange} searchQuery={this.state.search}/>
          </div>
          <div className="related-artists">
            <h3></h3>
          </div>
          <div className="related-songs">
            <h3></h3>
          </div>
          <div className="playlist-song-list">

          </div>
        </div>
      )
    }
  }
}



export default App;