import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';
import rootReducer from './reducers/rootReducer'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
