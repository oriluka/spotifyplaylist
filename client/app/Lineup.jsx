import React from 'react';
import LineupEntry from './LineupEntry.jsx';

class Lineup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameInput: ''
    }
  }

  onChange(event) {
 // Check to make sure a word was added
   this.setState({
     nameInput: event.target.value
   })
  }

  render() {
    return (

      <div>
        <ul id="lineup">
          {this.props.lineup.map((entry) =>
            <LineupEntry
            toggleSelect={this.props.toggleSelect}
            entry={entry}

            />
            )}
        </ul>
        <div>

        <label>Name your playlist: </label>
        <input value={this.state.nameInput} onChange={this.onChange.bind(this)}></input>
        </div>
        <button onClick={() => this.props.create(this.state.nameInput)}>Click to create new playlist</button>
      </div>
    )
  }


}
export default Lineup;