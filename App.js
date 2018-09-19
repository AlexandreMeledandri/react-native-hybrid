import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './Navigation';
import Jeu from './Jeu';

export default class App extends React.Component {
  render() {
    return (
        <StackNavigator/>
    );
  }
}
