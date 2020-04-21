import React from 'react';



const RelatedArtist = ({ artist, onSearchResultClick }) => (
  <li onClick={() => onSearchResultClick(artist)}>
    <img
      className="related-images"
      src={artist.images[0]
        ? artist.images[0].url
        : "https://cdn.discordapp.com/attachments/628989863105921024/701718047584419891/unknown.png"
      }
    ></img>
    <div className="just-artists">{artist.name}</div>
    <div>
      <span className="span-words">Followers: </span>{" "}
      <span className="stats">{artist.followers.total} </span>
    </div>
    <div>
      <span className="span-words">Genres: </span>
      <span className="stats"> {artist.genres.join(" | ")} </span>
    </div>
  </li>
);

export default RelatedArtist;