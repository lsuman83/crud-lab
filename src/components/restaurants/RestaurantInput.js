import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Restaurant Name
          </label>
          <input type='text'onChange={this.handleOnChange} value={this.state.text} />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
