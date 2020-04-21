import React from 'react';

const SelectedArtist = ({selected, add, toggleSelect }) => (

  //render artist
    <div className="selected-artist">
      <img id="selected-images"
      src={
        selected[0].images[0]
          ? selected[0].images[0].url
          : "https://cdn.discordapp.com/attachments/628989863105921024/701718047584419891/unknown.png"
      }
    ></img>
      <div className="just-artists">{selected[0].name}</div>
      <div>
        <span className="span-words">Followers: </span><span className="stats">{selected[0].followers.total} </span>
      </div>
      <div>
        <span className="span-words">Genres: </span>
        <span className="stats">{selected[0].genres.join(' | ')}</span>
      </div>
    </div>

)

export default SelectedArtist

// Have to deal with selected when there is no selection