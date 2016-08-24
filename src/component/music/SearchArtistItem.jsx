import React from 'react';
const SearchArtistItem = React.createClass({
  displayName: 'SearchArtistItem',
  handleArtistClick: function (e) {
    var {artist,searchSongsById} =this.props;
    searchSongsById(artist.artistid);
  },
  render: function () {
    var {artist} = this.props;
    return (
      <li>[<span onClick={this.handleArtistClick}>(歌手:{artist.artistname})</span>]</li>
    );
  }
});
module.exports = SearchArtistItem;