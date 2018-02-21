import React, { Component } from "react";
import "isomorphic-fetch";

import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }));
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <p>latest</p>
        {this.state.reviews.map(review => {
          return (
            <MovieReviews
              title={review["display_title"]}
              byLine={review["byline"]}
              summary={review["summary_short"]}
              linkUrl={review["link"]["url"]}
              linkText={review["link"]["suggested_link_text"]}
            />
          );
        })}
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
//movie review props

//this.props.display_title => result['display_title']
//this.props.mpaa_rating => result['mpaa_rating']
//this.props.summary_short => result['summary_short']
//this.props.linkUrl => result['link']['url']
//this.props.linkText => result['link']['suggested_link_text']
