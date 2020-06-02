import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../pages/Login';
import DisplayQR from '../pages/DisplayQR';
import CodeReader from '../pages/CodeReader';
import SignatureList from '../pages/SignatureList';

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
  }

});

const App = createAppContainer(AuthStackNavigator);
export default App;
