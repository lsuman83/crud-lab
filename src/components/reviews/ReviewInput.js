import React, { Component } from 'react';
import Reviews from './Reviews';



class ReviewInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state, this.props.restaurant_id)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' onChange={this.handleOnChange} value={this.state.text}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};



export default ReviewInput;
