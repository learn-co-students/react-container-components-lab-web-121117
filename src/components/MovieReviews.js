// Code MovieReviews Here
import React from 'react';
import PropTypes from 'prop-types'

const MovieReview = ({display_title, headline, byline}) => {
  // console.log(display_title)
  // console.log(headline)
  // console.log(byline)
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <h3>{headline}</h3>
      <h5>Written by: {byline}</h5>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(review => <MovieReview
        display_title={review.display_title}
        byline={review.byline}
        headline={review.headline}
        />)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;



// Your MovieReviews component should be stateless and functional.
// You are free to lay out each review as you like using the data that the API returns,
// but make sure that the component outputs a top-level element with the class review-list
// and that each review is wrapped by an element with class review.
