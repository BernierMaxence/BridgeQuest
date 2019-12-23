import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../Login';
import DisplayQR from './../DisplayQR';
import CodeReader from './../CodeReader';
import SignatureList from './../SignatureList';
const headerOptions = {
  headerTransparent: true,

}
const AuthStackNavigator = createStackNavigator({

  Login: {
    screen: Login,
    navigationOptions: {
        header: null,
      }
  },
  DisplayQR: {
    screen: DisplayQR,
    navigationOptions: headerOptions,
  },
  CodeReader: {
    screen: CodeReader,
    navigationOptions: headerOptions,
  
  },

  SignatureList: {
    screen: SignatureList,
    navigationOptions: headerOptions,
   
  },
});


const App = createAppContainer(AuthStackNavigator);

export default App;