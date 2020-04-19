import React from 'react';
import axios from 'axios';
// import the rest of the components



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
      song: ''
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
        <div>Hey</div>
      )
    }
  }
}



export default App;