import React from 'react';
import SearchArtist from './SearchArtist.jsx';
import SearchSong from './SearchSong.jsx';


const SearchList = ({ searchedArtists, searchedSongs, onSearchResultClick}) => (
  <div>
    <ul className="searched-songs">
      {searchedSongs.map((searchSong) =>
        <SearchSong
          onSearchResultClick= {onSearchResultClick}
          info={searchSong}
          title={searchSong.name}
          songId={searchSong.id}
          uri={searchSong.uri}
          previewUrl={searchSong.preview_url}
          artists={searchSong.artists}
          album={searchSong.album.name}
          albumArt={searchSong.album.images}
        />

      )}
    </ul>


    <div className="searched-artists">
      {
        searchedArtists.map((searchArtist) =>
        <SearchArtist
          onSearchResultClick={onSearchResultClick}
          info={searchArtist}
          artist={searchArtist.name}
          genres={searchArtist.genres}
          artistId={searchArtist.id}
          image={searchArtist.images}
          uri={searchArtist.uri}
        />


      )

      }
    </div>
  </div>
)


export default SearchList;