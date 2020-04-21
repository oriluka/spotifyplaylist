import React from 'react';

const SelectedArtist = ({selected, add, toggleSelect }) => (

  //render artist
    <div className="selected-artist">
      <img className="selected-images"
      src={
        selected[0].images[0]
          ? selected[0].images[0].url
          : "https://cdn.discordapp.com/attachments/628989863105921024/701718047584419891/unknown.png"
      }
    ></img>
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