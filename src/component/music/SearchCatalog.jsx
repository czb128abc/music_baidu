import React from 'react';
const SearchSongItem = require('./SearchSongItem.jsx');
const SearchArtistItem = require('./SearchArtistItem.jsx');
const SearchCatalog = React.createClass({
  displayName: 'SearchCatalog',
  searchSongsById: function (artistId) {
    this.props.searchSongsById(artistId)
  },
  render: function () {
    var {searchCatalog,searchSongsById} = this.props;
    searchCatalog.song = searchCatalog.song || [];
    searchCatalog.artist = searchCatalog.artist || [];
    searchCatalog.album = searchCatalog.album || [];
    return (
      <div>
        <div>
          歌手:
          <ul>
            {searchCatalog.artist.map(artist => <SearchArtistItem artist={artist} searchSongsById={searchSongsById}></SearchArtistItem>)}
          </ul>
        </div>
        <div>
          专辑:{JSON.stringify(searchCatalog.album)}
        </div>
      </div>
    );
  }
});
module.exports = SearchCatalog;