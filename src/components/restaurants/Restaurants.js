import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    debugger
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} delete={this.props.delete}/>)}
      </ul>
    );
  }
};

export default Restaurants;