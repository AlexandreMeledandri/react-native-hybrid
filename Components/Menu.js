import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

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
            title='Commencer' onPress={() => { this.props.navigation.navigate('jeu') }}/>
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