// Code MovieReviews Here
import React from "react";

class MovieReviews extends React.Component {
  render() {
    return (
      <div className="review-list">
        <h3>{this.props.title}</h3>
        <ul>
          <li>Critic: {this.props.byLine}</li>
          <li>Summary: {this.props.summary}</li>
          <li>
            <a href={this.props.linkUrl}>{this.props.linkText}</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MovieReviews;
