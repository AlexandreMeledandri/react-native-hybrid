import React from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

class menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          NomJoueur: null
        };
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.description}>Bienvenu dans MegaGameXXX2000 entrez votre nom svp :</Text>
            <TextInput
            style={styles.suggestInput} placeholder='Nom Joueur'
            onChangeText={(NomJoueur) => this.setState({NomJoueur})}
            value={this.state.NomJoueur}/>
            <Button
            title='Commencer' onPress={() => { this.props.navigation.navigate('Jeu', {name: this.state.NomJoueur})}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        width:140,
    }
})
export default menu
