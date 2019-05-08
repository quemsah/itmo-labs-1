import React from 'react';
import VideoListItem from './video_list_item';

export default props => (
    <ul className="col-md-4 list-group">
      { props.videos.map(video => <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video} />)}
    </ul>

);
