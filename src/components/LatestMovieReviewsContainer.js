import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews.js";

const NYT_API_KEY = "9a0b4d6d52924bb0946c42a2abf70756";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({ reviews: res.results });
      });
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
