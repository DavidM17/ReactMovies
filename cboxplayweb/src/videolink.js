import React from 'react';
import './App.css';

import IframeComponent from './IframeComponent';


const Video = (id) => {
  const srclink = 'https://1movietv.com/playstream/'+id.id;
  
  return (
    <div>
        <IframeComponent src={srclink} height="550px" width="100%"/>
      </div>
  );
}

export default Video;
