import React, { Component as Comp } from 'react';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCdekVIr3QaRl9Rql0BKSHACCU3GDh0lrY';


export default class extends Comp {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'Router'
    };

    this.videoSearch(this.state.term);
  }
  videoSearch(term) {
    YTSearch({
        key: API_KEY,
        term
      },
      videos => this.setState({
        videos,
        selectedVideo: videos[0]
      }));
}
  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (<div>
      <SearchBar onSearchTermChange={videoSearch} dfltVl={this.state.term} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
      />
    </div>);
  }
}
