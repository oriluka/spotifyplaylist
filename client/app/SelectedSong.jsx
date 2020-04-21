import React from 'react';

const Selected = ({ selected, add, toggleSelect }) => (
  //render song
  <div
    onClick={() => toggleSelect(selected[0].uri, selected)}
    className="selected-song">
    <img
      className="selected-images"
      src={
        selected[0].album.images[0]
          ? selected[0].album.images[0].url
          : "https://cdn.discordapp.com/attachments/628989863105921024/701718047584419891/unknown.png"
      }
    ></img>
    <div>{selected[0].name} </div>
    <div className="artist-name">{selected[0].artists[0].name} </div>
    <span> </span>
  </div>
);

export default Selected

