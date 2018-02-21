import React from 'react';

const MovieReviews = (props) => {
  console.log(props)
  let allReviews = props.reviews.map(review => <div className='review'>{review.display_title}</div>)
  return(
    <div className='review-list'>{allReviews}</div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
