import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '961b4ff2a3af4566884f14340016f1d4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleInputChange = event => this.setState({ searchTerm: event.target.value })

  handleSubmit = event => {
    event.preventDefault()

    fetch(URL.concat(this.state.searchTerm))
      .then(res => res.json())
      // .then(console.log)
      .then(json => this.setState({reviews: json.results}))
  }

  render() {
    return <div className="searchable-movie-reviews">
             <form onSubmit={this.handleSubmit}>
               <input type="text" onChange={this.handleInputChange}/>
               <button type="submit"></button>
             </form>
             <MovieReviews reviews={this.state.reviews} />
           </div>
  }
}

export default SearchableMovieReviewsContainer