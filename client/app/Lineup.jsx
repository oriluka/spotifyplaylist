import React from 'react';
import LineupEntry from './LineupEntry.jsx';

class Lineup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameInput: ''
    }
  }

  render() {
    return (

      <div>
        <label>Name your playlist</label>
        <input value="text"></input>
        <ul>
          {this.props.lineup.map((entry) =>
            <LineupEntry
            toggleSelect={this.props.toggleSelect}
            entry={entry}

            />
            )}
        </ul>

        <button onClick={() => this.props.create('TEST')}>Click to create new playlist</button>
      </div>
    )
  }


}
export default Lineup;