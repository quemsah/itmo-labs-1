import React, { Component as Comp } from 'react';
import 'babel-polyfill';
import { promisify as p } from 'util';
import { YTSearch as y } from 'youtube-api-search';
import _ from 'lodash';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCdekVIr3QaRl9Rql0BKSHACCU3GDh0lrY';

//const pre = o => new Promise(res => y(o, v => res(v)));

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
  async videoSearch(term) {
    const videos = await p(y)({ key: API_KEY, term });
    this.setState({ videos, selectedVideo: videos[0] });
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
