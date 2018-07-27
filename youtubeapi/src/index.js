import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = ''



/// create a new component producing html

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [  ],
			selectedVideo: null
		};
		this.videoSearch('alltime gaming');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
		this.setState({
		 videos: videos,
		 selectedVideo: videos[0]
		});
		//this.setState({ videos: videos });
		});
	};

	render() {
		//throttle the search to stop it being annoying
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 100);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos}
				/>
			</div>
		);
	}
}	

///  take this component's generated html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));