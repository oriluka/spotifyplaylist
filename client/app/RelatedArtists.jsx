import React from 'react';
import RelatedArtist from './RelatedArtist.jsx';


const RelatedArtists = ({artists}) => (
  <div>
    <ul>
     {artists.map((artist) =>
       <RelatedArtist
         artist={artist}
       />
     )
     }
    </ul>
  </div>
)

export default RelatedArtists;