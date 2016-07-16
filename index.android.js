import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src';

class RNStarter extends Component {
  componentDidMount() {
    codePush.sync()
  }

  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('RNStarter', () => RNStarter);
