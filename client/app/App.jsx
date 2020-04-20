import React from 'react';
import axios from 'axios';
import Spotify from 'spotify-web-api-js';
import Search from './Search.jsx';
import Lineup from './Lineup.jsx';
import Related from './Related.jsx';
import SearchList from './SearchList.jsx';
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
      // Searched Stuff
      searchArtists: [],
      searchSongs: [],
      // Related
      selectedSong: {},
      selected: [],
      relatedSongs: [],
      relatedArtists: []
    }
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token);
      console.log('params.access_token is set to spotifyApi')
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
    console.log('hash params are set')
    return hashParams;

  }

  // Toggles search entry. If toggled selected when create button is made, the songs get added
  onSearchResultClick() {
    // Add the

  }

  // Gets info for selected song
  getSelectedSong(song) {
    spotifyApi.getTrack(trackId, options, (err, res) => {
      console.log("**Track**");
      console.log(res);
    });
  }

  getSelectedArtist(artist) {
    spotifyApi.getTrack(trackId, options, (err, res) => {
      console.log("**Aartist**");
      console.log(res);
    });
  }

  ///////////////////////////////////
  /////////// SEARCH FUNCTIONS //////
  ///////////////////////////////////

  searchInputChange(query) {
    let types = ['artist', 'track'];
    let options = {
      limit: 3
    };
    spotifyApi.search(query, types, { limit: 3 }, (err, res) => {
      // If succeeded, display results as one enters in query.
      if (err) {
        console.log(err)
      }
      console.log('/////// app.jsxSearchInputChange')
      console.log(res.tracks.items)
      console.log(res.artists.items)

      var songs = res.tracks.items
      var artists = res.artists.items

      // set search state
      this.setState({
        searchSongs: songs,
        searchArtists: artists
      })
    })
  }

  // This has api requests to get related songs for selected search song
  searchSelectedSong(song) {
    let options = {};

    spotifyApi.getArtistTopTracks(artistId, countryId, options, (err, resSongs) => {
      console.log('******')
      console.log(resSongs);

      spotifyApi.getArtistRelatedArtists(artistId, options, (err, resArtists) => {
        console.log('*******')
        console.log(resArtists)

        this.setState({
          relatedArtists: resArtists,
          relatedSongs: resSongs
        })
      });


    })
  }

  searchSelectedArtist(artist) {
  }

  render() {

    if (!this.state.loggedIn) {
      return (
      <div className="playlistbuilder-login">
        <a href='http://localhost:4444/login'>
          <button>Login with Spotify</button>
        </a>
      </div>
      )
    } else {
      return (
        <div className="playlistbuilder-build">
          <div className="search-artist-and-song">
            <h3>Lets's get started!</h3>
            <Search searchInputChange={this.searchInputChange.bind(this)}/>
            <SearchList searchedArtists={this.state.searchArtists} searchedSongs={this.state.searchSongs} onSearchResultClick={this.onSearchResultClick.bind(this)}/>
          </div>
          <div className="related">
            <h3>You may be interested in: </h3>
            {/* <Related
            searchSelectedSong={this.searchSelectedSong}/> */}
          </div>
          <div className="playlist-song-list">
            <h3>Current Lineup</h3>
            {/* <Lineup /> */}
          </div>
        </div>
      )
    }
  }
}



export default App;