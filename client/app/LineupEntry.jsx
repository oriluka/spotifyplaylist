import React from 'react';

const LineupEntry = ({entry, toggleSelect}) => (
  <li id="lineupli" onClick={() => toggleSelect(entry.uri, entry)}>
   <div className="song-name">{entry.name}</div>
   <div className="song-artist">{entry.artists[0].name}</div>
  </li>
)

export default LineupEntry;