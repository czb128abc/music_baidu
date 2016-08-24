import React from 'react';
const PlayList = React.createClass({
  displayName: 'PlayList',
  render: function () {
    var {playlist} = this.props;
    return (
      <div>
        this is pay list;
        <ul>
          {playlist.map(item => <li>{item.title}({item.author})</li>)}
        </ul>
      </div>
    );
  }
});
module.exports = PlayList;