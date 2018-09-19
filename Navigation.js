import { createStackNavigator } from 'react-navigation';
import Jeu from './Components/Jeu';
import About from './Components/About';

const StackNavigator = createStackNavigator({
    Jeu: {
      screen: Jeu,
      navigationOptions: {
        title: 'Jeu'
      }
    },
    About: {
        screen: About,
        navigationOptions: {
          title: 'A propos'
        }
      }
  })
  
  export default StackNavigator