import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchMovieReviewsContainer extends Component {
  constructor() {
   super();

   this.state = {
     searchTerm: "",
     reviews: []
   };
 }

 handleSearch = event => {
   this.setState({
     searchTerm: event.target.value
   })
 }

 handleSubmit = event => {
   event.preventDefault()

   fetch(URL.concat(this.state.searchTerm))
     .then(response => response.json())
     .then(json => this.setState({ reviews: json.results }))
 }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearch}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
