import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Jeu extends React.Component {
    render() {
        return (
            <View>
            <TextInput placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {
            }}/>
            </View>
        )
    }
}
export default Jeu