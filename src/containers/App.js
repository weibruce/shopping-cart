import React, { Component } from 'react';
import logo from '../static/logo.svg';
import './App.css';

import { Provider } from 'react-redux';


import Shelf from '../components/shelf/Shelf';
import FloatCart from './../components/floatCart/FloatCart';

import store from '../redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Shopping Cart</h1>
          </header>

          <main>
            <Shelf />
          </main>
          
          <FloatCart />
        </div>
      </Provider>
    )
  }
}

export default App;
