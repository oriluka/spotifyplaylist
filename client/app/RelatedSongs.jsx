import React from 'react';
import RelatedSong from './RelatedSong.jsx';


const RelatedSongs = ({ songs, toggleSelect }) => (
  <div>
    <div className="related">
      {songs.map((song) =>
        <RelatedSong
          song={song}
          toggleSelect={toggleSelect}
        />
      )
      }
    </div>
  </div>
)

export default RelatedSongs;