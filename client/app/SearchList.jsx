import React from 'react';
import SearchArtist from './SearchArtist.jsx';
import SearchSong from './SearchSong.jsx';


const SearchList = ({ searchedArtists, searchedSongs, onSearchResultClick}) => (
  <div>
    <ul className="searched">
      {
      searchedSongs.map((searchSong) =>
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

    <ul className="searched">
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
    </ul>
  </div>
)


export default SearchList;