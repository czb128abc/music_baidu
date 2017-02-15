require('es6-promise');
require('isomorphic-fetch');
const httpP = 'http://localhost:3002';
const createAction = require('redux-actions').createAction;
const searchCatalogSug = createAction('SEARCH_CATALOG_SUG', data=> data);
const getSongAllInfo = createAction('GET_SONG_ALL_INFO', data=> data);
const getSongLrc = createAction('GET_SONG_LRC', data=> data);
const playListAddSongs = createAction('PLAY_LIST_ADD_SONGS', data=> data);
const searchSongListAddSongs = createAction('SEARCH_SONG_LIST_ADD_SONGS', data=> data);
//根据歌手id查询
exports.searchSongsById = function (artistId) {
  return function (dispatch, getState) {
    fetch(httpP+'/api/searchSongsById?id=' + artistId)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
      var state = getState();
      dispatch(searchSongListAddSongs(data.songlist));
    });
  }
};
//模糊搜索
exports.searchCatalogSugByName = function (singerName) {
  return function (dispatch, getState) {
    fetch(httpP+'/api/searchCatalogSug?name=' + singerName)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
      var state = getState();
      dispatch(searchCatalogSug(data))
    });
  }
};

/**
 * 添加 歌曲集合到 歌曲列表中
 * @param songIdSet
 */
exports.addSongsToPlayList = function (songIdSet) {
  return function (dispatch, getState) {
    const searchSongList = getState().music.searchSongList;
    let songs = getSongsInSearchResult(songIdSet, searchSongList);
    dispatch(playListAddSongs(songs));
  }
};
exports.playTheSong = function (songObj) {
  console.log('...action playTheSong '+songObj);
  var songId  = songObj.song_id;
  return function (dispatch, getState){
    fetch(httpP+'/api/getSongInfo?songId=' + songId)
      .then(function (response) {
        return response.json();
      }).then(function (theSong) {
      dispatch(getSongAllInfo(theSong))
    });
  }
};

/**
 * 在搜索区域中,查询song 对象集合
 * @param songIdSet
 */
const getSongsInSearchResult = function (songIdSet, searchSongList) {
  let songs = searchSongList.filter(function (item) {
    for (let i = 0; i < songIdSet.length; i++) {
      if (songIdSet[i] === item.song_id) {
        return true;
      }
    }
    return false;
  });
  return songs;
};
