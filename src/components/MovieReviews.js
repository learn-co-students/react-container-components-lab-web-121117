import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(review =>
        <div className="review"> <h2>{review.display_title}</h2> </div>
      )}
    </div>
  );
};

MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews
