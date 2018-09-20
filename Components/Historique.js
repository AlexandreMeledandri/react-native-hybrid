import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class Historique extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {

        }
    }
    render() {
        let scores = this.showScores()
        return (
            <View style={styles.container}>
            <Text style={styles.description}>Voici les résultats des 5 dernières parties :</Text>
                { scores }
            </View>
        )
    }
    showScores = () => {
        if(this.props.lastScore){
            return this.props.lastScore.map((item,index)=>(
                <View key={index}>
                <Text>Nom: { item.name }</Text>
                <Text>Nombre à trouver: { item.number }</Text>
                <Text>Nombre d'essais: { item.plays }</Text>
                </View>
            ))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        lastScore: state.lastScore
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