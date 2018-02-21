import React, { Component } from "react";
import "isomorphic-fetch";

import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  handleSearch = event => {
    let query = event.target.value;
    fetch(URL + query, {
      headers: {
        "api-key": NYT_API_KEY
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({ reviews: json.results });
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <p>Searchable Movie Reviews</p>
        <input type="text" onChange={this.handleSearch} />
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

export default SearchableMovieReviewsContainer;
