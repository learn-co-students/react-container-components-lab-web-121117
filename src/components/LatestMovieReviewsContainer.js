import React from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

require('es6-promise').polyfill();
require('isomorphic-fetch');

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '1d85fa71a44c4c16a62635c6f6b057c5';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      reviews: []
    };
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(reviews => this.setState({
      reviews: reviews.results
    }))
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Movie Reviews</h2>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;
