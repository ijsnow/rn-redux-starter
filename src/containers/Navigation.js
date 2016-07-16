import React, { Component } from 'react';
import { Navigator } from 'react-native';

class Navigation extends Component {
  renderScene(route, navigator) {
    const RouteComonent = this.props.routes.find(r => r.id == route.id).component;

    return (
      <RouteComonent
        name={route.name}
      />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'My First Scene', id: 0 }}
        renderScene={this.renderScene}
      />
    );
  }
}

export default Navigation;
