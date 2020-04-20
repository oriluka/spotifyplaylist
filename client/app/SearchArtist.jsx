import React from 'react';

const SearchArtist = (props) => (
  <li>
    <div className="searchartist" onClick={props.onSearchResultClick} id={props.artistId}>
      <img src={props.image}></img>
      <div className="div-artistname">{props.artist}</div>
      <div className="div-genre">
      </div>
    </div>
  </li>
)

export default SearchArtist;