import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Historique extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.description}>Voici les résultats des 5 dernières parties :</Text>
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
export default Historique