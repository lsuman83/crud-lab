import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    debugger
    return (
      <ul>
        {this.props.reviews.map(review => <Review review={review} />)}
      </ul>
    );
  }
};

export default Reviews;