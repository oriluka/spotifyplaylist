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


  getStarted() {
    // Make authentication call here.
    axios.get('localhost:4444/auth')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log('There was an error trying to get stuff')
      })

  }


  // Asks user to login and give permissions to spotify
  componentDidMount() {
  }

  render() {
    if (this.state.accessToken === null) {
      return (
        <div id="get-started">
          <h3>To get started:</h3>
          <button onClick={this.getStarted}>Click Here</button>
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