import React from 'react';
import YouTube from 'react-youtube';

function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  


function VideoPly() {
    const videoId = '5eLrBFZWnzk';
    return (
      <div style={{justifyContent:"center", alignItems:"center" , position:"sticky"}}>
        <YouTube videoId={videoId} />
      </div>
    );
}
  
export default VideoPly;
  