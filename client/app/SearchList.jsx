import React from 'react';
import SearchArtist from './SearchArtist.jsx';
import SearchSong from './SearchSong.jsx';


const SearchList = ({ searchedArtists, searchedSongs, onSearchResultClick}) => (
  <div>
    <div className="searched-songs">
      {searchedSongs.map((searchSong) =>
        <SearchSong
         onSearchResultClick={onSearchResultClick}
         searchSong={SearchSong}
        />
      )}
    </div>

    <div className="searched-artists">
      {searchedArtists.map((searchArtist) =>
        <SearchArtist
          onSearchResultClick={onSearchResultClick}
          searchArtist={searchArtist}

        />
      )}
    </div>
  </div>
)


export default SearchList;