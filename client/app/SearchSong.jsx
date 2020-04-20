import React from 'react';

const SearchSong = (props) => (
  <li>
    <div className="searchSong" onClick={() => props.onSearchResultClick(props.info)} id={props.songId}>
      <img src={props.albumArt[1].url}></img>
      <div className="div-trackname">{props.title}</div>
      <div className="div-artists">
        {props.artists.map((artist) =>
          <span className="span-artist">{artist.name} </span>
        )}
      </div>
    </div>
  </li>
)

export default SearchSong;