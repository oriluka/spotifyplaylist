import React from 'react';



const RelatedArtist = ({ artist  }) => (

  <li >
    <div>{artist.name}</div>
    <div><span>Followers: </span> <span>{artist.followers.total} </span></div>
    <div><span>Genres: </span><span> {artist.genres.join(' | ')} </span></div>
  </li>

)

export default RelatedArtist;