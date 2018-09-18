import React from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

class Jeu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyText: 'Trouve ma valeur, et je t\'offrirai le bonheur',
            suggestedNumber = null,
            number : Math.round(Math.random()*1000) 
        };
    }
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <TextInput style={styles.textinput} placeholder='Entrez votre valeur' value= {this.state.suggestedNumber}
        onChangeText={(suggestedNumber) => this.setState({suggestedNumber})}/> 
        <Button style={{height: 50}} title='Envoyer'onPress={() => {
            this.hint(this.comparate());
        }}/>
        <Button style={{height: 50}} title= 'Recommencer' onPress={() => {
            this.reset();
        }}/>
      </View>
    );
  }

  // Function

  hint = (_value) => {
      if(_value === 0)
        this.setState({bodyText = 'Victory !!!'});
      else if(_value === 1)
        this.setState({bodyText = 'Dommage c\'est moins.'});
      else if(_value === 2)
        this.setState({bodyText = 'Ah, ah, ah, bah nan c\'est plus.'});         

  };

  comparate = () => {
    if(this.state.suggestedNumber.toString() > this.state.number)
        return 2;
    else if(this.state.suggestedNumber.toString() < this.state.number)
        return 1;
    else if(this.state.suggestedNumber.toString() > this.state.number)
        return 0;
  };

  reset = () => {
    this.setState({bodyText = 'Trouve ma valeur, et je t\'offrirai le bonheur',
    number : Math.round(Math.random()*1000),
    suggestedNumber = null});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Jeu