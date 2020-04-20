import React from 'react';

const SelectedArtist = ({selected, add}) => (

  //render artist
    <div className="selected-artist">
      <div className="artist-name">{selected[0].name}</div>
      <div>
        <span>Followers: </span><span>{selected[0].followers.total} </span>
      </div>
      <div>
        <span>Genres: </span>
        <span>{selected[0].genres.join(' | ')}</span>
      </div>
    </div>

)

export default SelectedArtist

// Have to deal with selected when there is no selection