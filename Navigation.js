import { createBottomTabNavigator } from 'react-navigation';
import Jeu from './Components/Jeu';
import About from './Components/About';
import Historique from './Components/Historique'
import Menu from './Components/Menu';

const TabNavigator = createBottomTabNavigator({
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: 'Menu'
      }
    },
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
  })

  export default TabNavigator
