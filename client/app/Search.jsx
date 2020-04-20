import React from 'react';

import SearchArtist from './SearchArtist.jsx';
import SearchSong from './SearchSong.jsx';


class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  // Changes state and runs an api call when nput is made. Does not send api call when deleteing
  onChange(event) {

    // Check to make sure a word was added
    if (this.state.query.length < event.target.value.length) {
      // Run a request to get new artists
      this.props.searchInputChange(event.target.value)
    }
    // change state
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.query} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}

export default Search;