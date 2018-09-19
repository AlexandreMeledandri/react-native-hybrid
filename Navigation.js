import { createBottomTabNavigator } from 'react-navigation';
import Jeu from './Components/Jeu';
import About from './Components/About';

const TabNavigator = createBottomTabNavigator({
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
  
  export default TabNavigator