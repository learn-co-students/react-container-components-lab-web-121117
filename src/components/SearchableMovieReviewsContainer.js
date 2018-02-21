// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1d85fa71a44c4c16a62635c6f6b057c5';

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: "",
      test: "",
      test2: ""
    }
  }

  // update the State while you type
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handle the button click and reference the state values that have been kept updated
  handleClick = (event) => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(searchResults => {
      console.log(searchResults.results)
      this.setState({
        reviews: searchResults.results
      })
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="searchable-movie-reviews">
        <h2>Search Movie Reviews</h2>
        // render form below, set values equal to state keys and names equal to the same keys
        <input type="text" value={this.state.searchTerm} name="searchTerm" onChange={this.handleChange} />
        <input type="text" value={this.state.test} name="test" onChange={this.handleChange} />
        <input type="text" value={this.state.test2} name="test2" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Log it</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
