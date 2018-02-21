// Code SearchableMovieReviewsContainer Here

import React from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      searchTerm: "",
      reviews: []
    }

  }

  getMovie = (event) => {
    event.preventDefault();
    fetch(URL +  this.state.searchTerm)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results
    }))
  }

  setSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  render () {
  return(
    <div className="searchable-movie-reviews">
      <form onSubmit={this.getMovie}>
        <input type="text" onChange={this.setSearch}/>
        <button type="submit">Search</button>
      </form>

      <MovieReviews reviews={this.state.reviews}/>
    </div>
  )
  }
}

export default SearchableMovieReviewsContainer
