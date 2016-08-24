const Immutable = require('seamless-immutable');
let initialState = {
  playlist: [],
  currentSong: undefined,
  testList: [
    { songname: 'love you' },
    { songname: 'love you2' }
  ]
};
function music(state = Immutable.from(initialState), action) {
  const { type ,payload} = action;
  switch (type) {
    case 'SEARCH_CATALOG_SUG':
    {
      debugger;
      var newList = [{
        songname: 'song 1'
      }, {
        songname: 'song2'
      }];
      return state.setIn('playlist', action.payload).setIn('testList', newList);
    }
    default:
      return state;
  }
  return state;
};
module.exports = music;