import React from 'react';
import MovieReviews from './MovieReviews.js'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class ClassName extends React.Component {

  constructor(){
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  searchMovies = (event) => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(res => res.json()).then(json => this.setState({reviews: json.results}))
  }

  changeInput = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.searchMovies}>
          <input onChange={this.changeInput} />
          <input type='submit' />
        </form>
        <MovieReviews reviews = {this.state.reviews} />
      </div>
    )
  }
}
