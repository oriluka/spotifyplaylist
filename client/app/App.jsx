import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Spotify from 'spotify-web-api-js';
import Search from './Search.jsx';
import Lineup from './Lineup.jsx';

import RelatedArtists from './RelatedArtists.jsx';
import RelatedSongs from './RelatedSongs.jsx';
import SearchList from './SearchList.jsx';
import SelectedSong from './SelectedSong.jsx';
import SelectedArtist from './SelectedArtist.jsx';
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
      userId: params.accountId,
      lineup: [],
      getSongs: [],
      playlistName: '',
      // Searched Stuff
      searchArtists: [],
      searchSongs: [],
      // Related
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
  onSearchResultClick(selection) {
    // Add the'
    let renderSidebar = this.renderSidebar.bind(this)
    // set selected
    this.setState({
      selected: [selection]
    }, () => {renderSidebar()});
  }

  // Gets info for selected song
  getSelectedSong(song) {
    spotifyApi.getTrack(trackId, options, (err, res) => {
    });
  }

  getSelectedArtist(artist) {
    spotifyApi.getTrack(trackId, options, (err, res) => {

    });
  }

  ///////////////////////////////////
  /////////// SEARCH FUNCTIONS //////
  ///////////////////////////////////

  searchInputChange(query) {
    let types = ['artist', 'track'];
    let options = {
      limit: 4
    };
    spotifyApi.search(query, types, { limit: 4 }, (err, res) => {
      // If succeeded, display results as one enters in query.
      if (err) {
        console.log(err)
      }

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

      spotifyApi.getArtistRelatedArtists(artistId, options, (err, resArtists) => {

        this.setState({
          relatedArtists: resArtists,
          relatedSongs: resSongs
        })
      });


    })
  }

  ////////////////////////////////
  ////////////// Selected
  /////////////////////////////////

  create(name) {
    // make api request to create playlist
    let songs = this.state.getSongs

      let options = {
        name: name,
        public: true
      };
    spotifyApi.createPlaylist(this.state.userId, options)
      .then((res) => {
        return spotifyApi.addTracksToPlaylist(res.id, songs, {"uris": songs
        })
      })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err)
      })

  }

  toggleSelect(id, song) {
    let lineup = this.state.lineup
    let getSongs = this.state.getSongs // ids

    let index = getSongs.indexOf(id);
    let songIndex = lineup.indexOf(song.id)

    // Iterate through song objects

    if (index > -1) {
      getSongs.splice(index, 1);
      for (var x = 0; x < lineup.length; x++) {
        if (lineup[x].id === id) {
          lineup.splice(x, 1);
        }
      }
    } else {
      getSongs.push(id);
      lineup.push(song)
    }

    this.setState({
      lineup: lineup,
      getSongs: getSongs

    })
  }

  // Render sidebar
  renderSidebar() {

    let sidebar;
    let artist;
    let song;
    // do api calls for the related content
    if (this.state.selected[0].hasOwnProperty('followers')) {

      // Api call using artist
      sidebar = (
        <div className="sidebar">
          <div className="selected">
            <SelectedArtist
              toggleSelect={this.toggleSelect.bind(this)}
              selected={this.state.selected}
              />
          </div>
        </div>
      )
      ReactDOM.render(sidebar, document.getElementById("sidebar-selected"))
      artist = this.state.selected[0].id;
    } else {

      // Api call using song
        sidebar = (
          <div className="sidebar">
          <div className="selected">
            <SelectedSong
              toggleSelect={this.toggleSelect.bind(this)}
              selected={this.state.selected}
              />
          </div>
        </div>
      )
      ReactDOM.render(sidebar, document.getElementById("sidebar-selected"))
      song = this.state.selected[0].id;
      artist = this.state.selected[0].artists[0].id;

    }
    // Run api calls to get related data
    let renderRelated = this.renderRelated.bind(this)
    let options = {"limit": 10}
    let topTracks, relatedArtists;
    spotifyApi.getArtistTopTracks(artist, 'US', options)
      .then((songs) => {
        topTracks = songs.tracks;
        return spotifyApi.getArtistRelatedArtists(artist, options)
      })
      .then((artists) => {
        relatedArtists = artists.artists;

        console.log(topTracks)
        console.log(relatedArtists)
        this.setState({
          relatedSongs: topTracks,
          relatedArtists: relatedArtists
        }, () => { renderRelated()})

      })
      .catch((err) => {
        console.log(err);
      })

  }

  renderRelated() {
    let related = (
      <div className="related">
        <h3>You may be interested in: </h3>
        <div className="related-songs"></div>
          <RelatedSongs
            songs={this.state.relatedSongs}
            toggleSelect={this.toggleSelect.bind(this)}
        />
        <div className="related-artists">
          <RelatedArtists
           artists={this.state.relatedArtists}
           onSearchResultClick={this.onSearchResultClick.bind(this)}
          />
        </div>
      </div>
    )
    ReactDOM.render(related, document.getElementById("sidebar-related"))
  }


  render() {

    if (!this.state.loggedIn) {
      return (
      <div className="playlistbuilder-login">
          <a href='http://35.183.41.32:4444/login'>
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
          <div className="playlist-song-list">
            <h3>Current Lineup</h3>
            <Lineup
              toggleSelect={this.toggleSelect.bind(this)}
              lineup={this.state.lineup}
              create={this.create.bind(this)}
            />
          </div>


          <div id='rg_embed_link_378195' class='rg_embed_link' data-song-id='378195'>Read <a href='https://genius.com/Sia-chandelier-lyrics'>“Chandelier” by Sia</a> on Genius</div> <script crossorigin src='//genius.com/songs/378195/embed.js'></script>
        </div>
      )
    }
  }
}



export default App;