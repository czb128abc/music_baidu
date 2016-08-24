const music = require('./../../service/music.js');
music.searchCatalogSug('李宗盛', function (data) {
  console.log(data);
  for (var i = 0; i < data.song.length; i++) {
    var songid = data.song[i].songid;
    music.getSongLrc(songid, function (songInfo) {
    });
  }
});
