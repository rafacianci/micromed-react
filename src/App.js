import 'bulma/css/bulma.css';
import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import reducers from './reducers';
import Products from './containers/Products/';
import ProductForm from './containers/ProductForm/';
import './App.css';

axios.defaults.baseURL = 'http://mmdesenv18:3003/api/';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

const App = () => (
  <Router>
    <Provider store={store}>
      <div className='App'>
        <Route exact path='/products' component={Products} />
        <Route path='/product/:productId' component={ProductForm} />
        <Redirect from='/' to='/products' />
      </div>
    </Provider>
  </Router>
);

export default App;
