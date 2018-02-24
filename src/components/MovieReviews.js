import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map((review, index) => {
        return (
          <div className="review" key={index}>
            <h3>{review.display_title}</h3>
            <p>{review.headline}</p>
          </div>
        );
      })}
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
