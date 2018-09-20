import { createBottomTabNavigator } from 'react-navigation';
import Jeu from './Components/Jeu';
import About from './Components/About';
import Historique from './Components/Historique'

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
      },
      Historique: {
        screen: Historique,
        navigationOptions: {
          title: 'Historique'
        }
      }
  }),
  Jeu: {
    screen: Menu,
    navigationOptions: {
      title: 'Menu'
    }
  }

  export default TabNavigator
