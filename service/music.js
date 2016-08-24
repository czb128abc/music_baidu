require('es6-promise');
require('isomorphic-fetch');
const FormData = require('form-data');
const baseUrl = 'http://tingapi.ting.baidu.com/v1/restserver/ting';
var music = {
  searchSongsById: function (id,other = {limits:20,use_cluster:1,order:2}, callback) {
    var form = new FormData();
    form.append('method', 'baidu.ting.artist.getSongList');
    form.append('tinguid', id);
    for(var item in other){
      form.append(item,other[item]);
    }
    fetch(baseUrl, { method: 'POST', body: form }).then(function (res) {
      return res.json();
    }).then(function (json) {
      callback(json)
      return json;
    });
  },
  searchCatalogSug: function (name, callback) {
    var form = new FormData();
    form.append('method', 'baidu.ting.search.catalogSug');
    form.append('query', name);
    fetch(baseUrl, { method: 'POST', body: form }).then(function (res) {
      return res.json();
    }).then(function (json) {
      callback(json)
      return json;
    });
  },
  //获取歌曲信息
  getSongInfo: function (songId, callback) {
    var form = new FormData();
    form.append('method', 'baidu.ting.song.play');
    form.append('songid', songId);
    fetch(baseUrl, { method: 'POST', body: form }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.info('getSongInfo : ' + songId);
      console.log(json);
      callback(json)
      return json;
    });
  },
  //获取歌词信息
  getSongLrc: function (songId, callback) {
    var form = new FormData();
    form.append('method', 'baidu.ting.song.lry');
    form.append('songid', songId);
    fetch(baseUrl, { method: 'POST', body: form }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.info('getSongLrc : ' + songId);
      console.log(json);
      callback(json)
      return json;
    });
  },
};

global.music = music;
module.exports = music;