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
        let scores = showScores()
        console.log(this.props)
        console.log(this.props.state.lastScore)
        return (
            <View style={styles.container}>
            <Text style={styles.description}>Voici les résultats des 5 dernières parties :</Text>
                { scores }
            </View>
        )
    }
}
const showScores = () => {
    if(this.props.state.lastScore){
        this.props.state.lastScore.map((item)=>(
            <Text>{ item.number }</Text>
        ))
        }
}
const mapStateToProps = (state) => {
    return {
        state
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