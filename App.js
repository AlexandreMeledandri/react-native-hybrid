import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Jeu from './Components/Jeu';
import TabNavigator from './Navigation';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
      <TabNavigator/>
      </Provider>
    );
  }
}
