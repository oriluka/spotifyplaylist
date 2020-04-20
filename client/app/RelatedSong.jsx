import React from 'react';


const RelatedSong = ({ song, toggleSelect}) => (

  <li onClick={() => toggleSelect(song.id)} >
    <div>{song.name}</div>
    <div>{song.artists[0].name}</div>

  </li>

)

export default RelatedSong;