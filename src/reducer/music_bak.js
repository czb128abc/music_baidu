let initialState = {
  playlist: [],
  currentSong: null,
  testList : [{songname:'love you'}]
};
function music(state = initialState, action) {
  const { type ,payload} = action;
  switch (type) {
    case 'SEARCH_CATALOG_SUG':
    {
      state.playlist = action.payload;
      return state;
    }
    default:
      break;
  }
  return state;
};
module.exports = music;