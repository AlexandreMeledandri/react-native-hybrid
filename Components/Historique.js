import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class Historique extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.description}>Voici les résultats des 5 dernières parties :</Text>
            <Text style={styles.tabscore}></Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {lastScore: state.lastScore
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
        width:100,
    }
})
export default connect(mapStateToProps)(Historique)