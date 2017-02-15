let initialState = {
  playlist: [],
  //搜索分类 artist,song,album
  searchCatalog: {},
  searchSongList: [],
  currentSong: undefined,
  testList: [
    { songname: 'love you' },
    { songname: 'love you2' }
  ]
};
function music(state = initialState, action) {
  const { type ,payload} = action;
  switch (type) {
    case 'SEARCH_CATALOG_SUG':
    {
      var obj = {};
      obj.testList = [{
        songname: 'jay fan'
      }];
      obj.searchCatalog = action.payload;
      return Object.assign({}, state, obj);
    }
    case 'PLAY_LIST_ADD_SONGS':
    {
      var obj = {
        playlist: []
      };
      for (let i = 0; i < state.playlist.length; i++) {
        obj.playlist.push(state.playlist[i])
      }
      for (let i = 0; i < payload.length; i++) {
        obj.playlist.push(payload[i])
      }
      return Object.assign({}, state, obj);
    }
    case 'SEARCH_SONG_LIST_ADD_SONGS':
    {
      var obj = {
        'searchSongList': payload
      };
      return Object.assign({}, state, obj);
    }
    case 'GET_SONG_ALL_INFO':
    {
      var obj = {
        'currentSong': payload
      };
      return Object.assign({}, state, obj);
    }
    default:
      break;
  }
  return state;
}
;
module.exports = music;