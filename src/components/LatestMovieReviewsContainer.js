import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cea8bce638724b1b886ca6b8665ecb09';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then((data => this.setState({
      reviews: data
    })))
  }

  render() {
    // console.log(this.state.reviews)
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews.results} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer

//Both container components should be class components that maintain state.
//The `LatestMovieReviewsContainer` should have a top-level wrapping element
// with class `latest-movie-reviews`. The `SearchableMovieReviewsContainer`
// should have a top-level wrapping element with class `searchable-movie-reviews`.
