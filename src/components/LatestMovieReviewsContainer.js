import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = '318a15fb03534494a2a73fc134d2f046';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  
  state = {
    reviews: []
  }
  
  fetchReviews(){
    fetch(URL).then(res => res.json())
    .then(reviews => this.setState({reviews}))
  }
  
  render(){
    this.fetchReviews()
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
