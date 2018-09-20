  import {createDrawerNavigator} from 'react-navigation'
  import { connect, Provider } from 'react-redux'
  import {createStore, combineReducers} from 'redux'
  import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
  import addHistorique from './Store/Reducers/addHistorique'
  import Jeu from './Components/Jeu';
  import About from './Components/About';
  import Historique from './Components/Historique'
  import Menu from './Components/Menu'

  const Reducers = combineReducers({addHistorique}); //Pour utiliser plusieurs Reducers

  export const store = createStore(Reducers);

  const MyStack = createDrawerNavigator({
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
  });

  export const middleware = createReactNavigationReduxMiddleware("root", state => state.navigation); // Pour connecter toutes les pages de react-navigation a redux grace au Middleware

  const addListner = reduxifyNavigator(MyStack, "root"); // Pour dire que l'on utilise le Navigator 'myStack'

  const mapStateToProps = state => ({navigation : state.navigation}); // Pour lier le store au navigator

  export default ConnectDrawer = connect(mapStateToProps)(MyStack);// Pour finir la connection a redux
