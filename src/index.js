import React from "react";
import ReactDOM from "react-dom";

import LatestMovieReviewsContainer from "./components/LatestMovieReviewsContainer";
import SearchableMovieReviewsContainer from "./components/SearchableMovieReviewsContainer";

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById("root")
);

//movie review props

//this.props.display_title => result['display_title']
//this.props.mpaa_rating => result['mpaa_rating']
//this.props.summary_short => result['summary_short']
//this.props.linkUrl => result['link']['url']
//this.props.linkText => result['link']['suggested_link_text']
