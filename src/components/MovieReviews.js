import React from 'react';

const MovieReviews = function(props){
  // console.log(props.reviews)
  return (
    <div className="review-list">
      {props.reviews.map(review => 
        <div className="review">
          {review.display_title}
          {review.summary_short}
        </div>
      )}
    </div>
  )
}


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
