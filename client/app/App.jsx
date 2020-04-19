import React from 'react';
import axios from 'axios';
// import the rest of the components



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      accessToken: null,
      refreshToken: null,
      playlist: [],
      playlistName: '',
      playlistSize: '',
      artist: '',
      song: ''
    }
  }

  // Asks user to login and give permissions to spotify

  render() {
    return (
      <div className="playlistbuilder">
        <a href='http://localhost:4444/login'>
          <button>Login with Spotify</button>
        </a>

      </div>
    )

  //   if (this.state.accessToken === null) {
  //     return (
  //       <div id="get-started">
  //         <h3>To get started:</h3>
  //         <button onClick={this.getStarted}>Click Here</button>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>Hey</div>
  //     )
  //   }
  // }
    }
}


export default App;