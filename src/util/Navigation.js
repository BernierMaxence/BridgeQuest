import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../pages/Login';
import DisplayQR from '../pages/DisplayQR';
import CodeReader from '../pages/CodeReader';
import SignatureList from '../pages/SignatureList';
import WaitingRoom from '../pages/WaitingRoom';
import DisplayMap from '../pages/DisplayMap';

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
  WaitingRoom: {
    screen: WaitingRoom,
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
  DisplayMap: {
    screen : DisplayMap,
    navigationOptions: headerOptions,
  }

});

const App = createAppContainer(AuthStackNavigator);
export default App;
