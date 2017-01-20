import React from 'react';
const SearchSongItem = require('./SearchSongItem.jsx');
const SearchSongList = React.createClass({
  displayName: 'SearchSongList',
  handleAddSongToPlayList:function(songid){
    this.props.addSongsToPlayList([songid]);
  },
  render: function () {
    var {playlist,searchSongList,addSongsToPlayList} = this.props;
    return (
      <div>
        this is searchSongList;
        <ul>
          {searchSongList.map(item => <SearchSongItem key={item.song_id} item={item} handleAddSongToPlayList={this.handleAddSongToPlayList}></SearchSongItem>)}
        </ul>
      </div>
    );
  }
});
module.exports = SearchSongList;