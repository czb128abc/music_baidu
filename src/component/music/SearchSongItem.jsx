import React from 'react';
const SearchSongItem = React.createClass({
  displayName: 'SearchSongItem',
  handleAddSongsClick: function (e) {
    var {item,handleAddSongToPlayList} =this.props;
    handleAddSongToPlayList(item.song_id);
  },
  render: function () {
    var {key,item} = this.props;
    return (
      <li>{item.title}(歌手:{item.author})[<span onClick={this.handleAddSongsClick}>add</span>]</li>
    );
  }
});
module.exports = SearchSongItem;