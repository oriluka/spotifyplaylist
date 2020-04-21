import React from 'react';


const RelatedSong = ({ song, toggleSelect }) => (
  <div onClick={() => toggleSelect(song.uri, song)}>
    <img
      className="related-images"
      src={
        song.album.images[0]
          ? song.album.images[0].url
          : "https://cdn.discordapp.com/attachments/628989863105921024/701718047584419891/unknown.png"
      }
    ></img>
    <div className="div-trackname">{song.name}</div>
    <div className="div-artists">{song.artists[0].name}</div>
  </div>
);

export default RelatedSong;