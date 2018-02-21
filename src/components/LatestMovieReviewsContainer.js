import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '961b4ff2a3af4566884f14340016f1d4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({reviews: json.results}))
  }


  render () {
    return <div className="latest-movie-reviews">
            <MovieReviews reviews={this.state.reviews} />
           </div>
  }
}

export default LatestMovieReviewsContainer