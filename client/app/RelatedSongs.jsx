import React from 'react';
import RelatedSong from './RelatedSong.jsx';


const RelatedSongs = ({ songs, toggleSelect }) => (
  <div>
    <ul>
      {songs.map((song) =>
        <RelatedSong
          song={song}
          toggleSelect={toggleSelect}
        />
      )
      }
    </ul>
  </div>
)

export default RelatedSongs;