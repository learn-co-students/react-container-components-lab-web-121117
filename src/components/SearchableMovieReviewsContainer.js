import React from 'react'
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const API_KEY = '318a15fb03534494a2a73fc134d2f046';

export default class SearchableMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  fetchReviews(query){
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${API_KEY}`)
    .then(res => res.json())
    .then(reviews => this.setState({reviews}))
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
