import React from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

class Jeu extends React.Component {
    constructor(props) {
        super(props)
        this.number = Math.round(Math.random()*1000)
        this.state = {
          bodyText: 'Essayez de deviner le chiffre mystère. il est compris entre 1 et 1000.\n\nAttention vous n\'avez que 5 essais',
          suggestedNumber: '',
          plays: 0
        };
      }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.counter}>
                Coups: {this.state.plays}
            </Text>
            <Text style={styles.bodyText}>
                {this.state.bodyText}
            </Text>
            <TextInput 
            style={styles.suggestInput} placeholder='Entrez un chiffre'
            onChangeText={(suggestedNumber) => this.setState({suggestedNumber})}
            value={this.state.suggestedNumber}/>
            <View style={styles.marginBottom}>
            <Button
                title='Deviner' 
                onPress={() => {
                    if(this.state.plays < 5) {
                        this.hint(this.comparate());
                    } else {
                        this.setState({
                            bodyText: 'Vous n\'avez plus d\'essais'
                        })
                        this.addHistory()
                    }
                }}
            />
            </View>
            <Button
            title='Recommencer' 
            onPress={() => {
                this.reset();
            }}/>
            <View>
                <Button title={'A propos'} onPress={() => this.props.navigation.navigate('About')}/>
            </View>
            </View>
        )
    }
    hint = (_value) => {
        if(_value === 2){
            this.setState({
                        bodyText: 'Vous devez entrez un chiffre'
                    })
        }
        else if(_value === 1) {
            this.setState({
                bodyText: 'c\'est plus',
            })
        } else if(_value === -1) {
            this.setState({
                bodyText: 'c\'est moins',
            })
        } else if(_value === 0) {
            this.setState({
                bodyText: 'Vous avez gagné',
            })
            this.addHistory()
        }
    }
    comparate = () => {
        if(this.state.suggestedNumber === '') {
            return 2;
        }
        this.setState({
            plays: ++this.state.plays,
        })
        if(parseInt(this.state.suggestedNumber) > this.number) {
            return -1;
        } else if(parseInt(this.state.suggestedNumber) < this.number){
            return 1;
        } else if(parseInt(this.state.suggestedNumber) === this.number){
            return 0
        }

    }
    reset = () => {
        this.setState({
            bodyText: 'Essayez de deviner le chiffre mystère. il est compris entre 1 et 1000.\n\nAttention vous n\'avez que 5 essais',
            suggestedNumber: '',
            plays: 0
        });
        this.number = Math.round(Math.random()*1000)
    }

    addHistory = () => {
        console.log('number',this.number)
        const action = { type: "ADD_HISTORY", value: {number: this.number, plays: this.state.plays }}
        this.props.dispatch(action)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    suggestInput: {
        width: 120,
        padding:10,
        marginBottom: 10
    },
    bodyText: {
        width:140
    },
     marginBottom: {
        marginBottom: 10
    },
    counter: {
        marginBottom: 10
    }
  });
export default connect()(Jeu)