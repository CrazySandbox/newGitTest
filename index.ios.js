import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import Root from './src/main';

export default class CarTaxi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

AppRegistry.registerComponent('CarTaxi', () => CarTaxi);
