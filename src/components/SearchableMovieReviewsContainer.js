import React from "react";
import MovieReviews from "./MovieReviews.js";

const NYT_API_KEY = "9a0b4d6d52924bb0946c42a2abf70756";
const BASE_URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";

class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  setTerm = event => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
  };

  fetchReviews = event => {
    event.preventDefault();
    fetch(`${BASE_URL}${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        {console.log(this.state.searchTerm)}
        <form onSubmit={this.fetchReviews}>
          Search: <input onChange={this.setTerm} type="text" />
          <button value="submit">Submit</button>
        </form>
        <h1>Search Results</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
