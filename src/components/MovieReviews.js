// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {
      reviews.map((review, index) =>
        <div key={index} className="review">
          <img src={review.multimedia ? review.multimedia.src : ""} alt={review.display_title} />
          <h3>{review.display_title}</h3>
          <p>MPAA Rating: {review.mpaa_rating}</p>
          <p>{review.headline}</p>
          <p>Summary: {review.summary_short}</p>
          <p>Publication date: {review.publication_date}</p>
          <a href={review.link.url} target="_blank">{review.link.suggested_link_text}</a>
        </div>
      )
    }
  </div>
)

// Specifies the default values for props:
MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
