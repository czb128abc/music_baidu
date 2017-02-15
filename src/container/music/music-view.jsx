import React from 'react';
import { connect } from 'react-redux';
const actions = require('./../../action/music.js');
const Playlist = require('./../../component/music/PayList.jsx');
const SearchSongList = require('./../../component/music/SearchSongList.jsx');
const SearchCatalog = require('./../../component/music/SearchCatalog.jsx');
const APlayer = require('./../../component/music/APlayer.jsx');
//<!--  搜索区域 (搜索框|搜索结果列表)-->
//<!--  歌曲区域 -->
//<!--  播放器 -->
//<!--  播放列表 -->
const MusicView = React.createClass({
  displayName: 'music-view',
  handleSearchCatalogSugByName: function () {
    const {searchCatalogSugByName} = this.props;
    var searchInputDom = this.searchInput;
    searchCatalogSugByName(searchInputDom.value ? searchInputDom.value : 'jay');
  },
  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.handleSearchCatalogSugByName();
    }
  },
  render: function () {
    const {searchCatalogSugByName,playlist,searchCatalog,searchSongsById,currentSong} = this.props;
    return (
      <div className="music-view">
        <APlayer currentSong={currentSong}></APlayer>

        <input type="text" ref={(ref)=>this.searchInput=ref}
               style={{ width: '200px', padding: '10px' }}
               onKeyDown={this.handleSubmit}
        />
        <Playlist {...this.props}>
        </Playlist>
        <SearchCatalog searchCatalog={searchCatalog}
                       searchSongsById={searchSongsById}></SearchCatalog>

        <SearchSongList {...this.props}>
        </SearchSongList>

      </div>
    );
  }
});
module.exports = connect(status=>status.music, actions)(MusicView);
