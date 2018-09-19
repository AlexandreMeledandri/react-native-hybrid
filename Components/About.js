import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

class About extends React.Component {
    render() {
      return (
        <View>
        <Text style={styles.header}>
            Hello!
        </Text>
        <Text>
            This App was made by 2 Alexandre, 1 Cedric and 1 Arnaud
        </Text>
        <Text>
            Thanks for trying it
        </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    header: {
      fontSize: 60,
      fontWeight: 'bold'

    }
  });
  export default About;