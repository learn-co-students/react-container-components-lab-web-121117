// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return (
    <ul className="review-list">
      {props.reviews.map((review) => {
        return <li className="review"> {review.display_title}</li>
      })}
    </ul>
  )
}

MovieReviews.defaultProps={
  reviews: []
}

export default MovieReviews
