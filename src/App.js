import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Route path="/" exact component={Home} /> */}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;