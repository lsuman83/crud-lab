import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant_id={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review, restaurant_id) => dispatch({type: 'ADD_REVIEW', text: review.text, restaurant_id: restaurant_id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
