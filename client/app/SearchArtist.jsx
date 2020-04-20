import React from 'react';

const SearchArtist = (props) => (
  <li>
    <div className="searchartist" onClick={props.onSearchResultClick} id={props.artistId}>
      <img src={props.image[0] ? props.image[1].url : 'https://cdn.discordapp.com/attachments/628989863105921024/701718047584419891/unknown.png'}></img>
      <div className="div-artistname">{props.artist}</div>
      <div className="div-genre">
      </div>
    </div>
  </li>
)

export default SearchArtist;