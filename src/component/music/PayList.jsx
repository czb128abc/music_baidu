import React from 'react';
const PlayList = React.createClass({
  displayName: 'PlayList',
  handlePlay: function(song){
    const {playTheSong} = this.props;
    console.log('handle play '+song.song_id);
    playTheSong(song);
  },
  rendPlayItem: function(item,index){
    return (
      <li key={item.all_artist_ting_uid+'_'+item.song_id}>
        {item.title}({item.author})
        <br/>
        <span onClick={e=>this.handlePlay(item)}>播放</span>
      </li>
    );
  },
  render: function () {
    var {playlist} = this.props;
    return (
      <div>
        this is pay list;
        <ul>
          {
            playlist.map((item, index) => {
              return this.rendPlayItem(item,index);
            })
          }
        </ul>
        <div ref=""></div>
      </div>
    );
  }
});
module.exports = PlayList;