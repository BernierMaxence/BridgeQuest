import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import QRCode from 'react-native-qrcode-svg';
import Dock from '../dock/Dock';

class DisplayQR extends React.Component{

  // constructor(props){
  //     super(props);
  // }

    static navigationOptions= ({navigation}) => ({
        headerLeft: <Dock
          login={"OUI"}
          playerId={100}
          gameId={100}></Dock>
    });

    // login={"OUI"}
    // playerId={100}
    // gameId={100}

    render(){
      //  console.log("oui")
      //  console.log(this.props.navigation.getParam('login'))
      //  console.log(this.props.navigation.getParam('playerId'))
      //  console.log(this.props.navigation.getParam('gameId'))
      // console.log("stop\n")
      const login = this.props.navigation.getParam('login');
      //console.log(login)
      return(
        <SafeAreaView style={styles.mainContainer}>
          <QRCode
            value={login}
            size={270}
            color={'white'}
            backgroundColor={'#2c3e50'}
          />
        </SafeAreaView>
      )
    }

}

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: '#2c3e50',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center' ,
    alignItems: 'center',
  }

});

export default withNavigation(DisplayQR);
