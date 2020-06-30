import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import ScrollToTop from './components/ScrollTopcomponent';

import ScrollButton from './components/scrollTopButton';



const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
          <div>
            <Main />
            <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
          </div>
          </ScrollToTop>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
