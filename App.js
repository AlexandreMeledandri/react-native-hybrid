import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Jeu from './Components/Jeu';
import StackNavigator from './Navigation';

export default class App extends React.Component {
  render() {
    return (
        <StackNavigator/>
    );
  }
}
