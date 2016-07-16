import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';

import Navigation from './containers/Navigation'

export default function App(props) {
  return (
    <Provider store={createStore()}>
      <Navigation />
    </Provider>
  );
}
