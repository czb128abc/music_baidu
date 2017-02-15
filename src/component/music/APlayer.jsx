import React from 'react';
import APlayer from 'aplayer';
const PlayList = React.createClass({
  displayName: 'APlayer',
  convertSong : function(currentSong){
    return {
      title: currentSong.songinfo.title,
      author: currentSong.songinfo.author,
      url: currentSong.bitrate.show_link,
      pic: currentSong.songinfo.pic_small,
      lrc: currentSong.songLrcObj.lrcContent
    }
  },
  componentDidUpdate(){
    const {currentSong} = this.props;
    const playerDom = this.playerDom;

    if(currentSong){
      const music = this.convertSong(currentSong);
      var ap = new APlayer({
        element: playerDom,                       // Optional, player element
        narrow: false,                                                     // Optional, narrow style
        autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
        showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
        mutex: true,                                                       // Optional, pause other players when this player playing
        theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
        mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
        preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
        listmaxheight: '513px',                                             // Optional, max height of play list
        music: music
      });
    }

  },
  render: function () {
    const {currentSong} = this.props;
    var album_title = currentSong ? currentSong.songinfo.album_title : '';
    return (
      <div>
        <div className="aplayer" ref={(ref)=>this.playerDom=ref}></div>
        <div id="player1" className="aplayer"></div>
      </div>
    );
  }
});
module.exports = PlayList;