import React from 'react';
import RelatedArtist from './RelatedArtist.jsx';


const RelatedArtists = ({artists, onSearchResultClick}) => (
  <div>
    <ul>
     {artists.map((artist) =>
       <RelatedArtist
         artist={artist}
         onSearchResultClick={onSearchResultClick}
       />
     )
     }
    </ul>
  </div>
)

export default RelatedArtists;