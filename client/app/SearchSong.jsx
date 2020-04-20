import React from 'react';

const SearchSong = (props) => (
  <li>
    <div className="searchSong" onClick={props.onSearchResultClick} id={props.songId}>
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