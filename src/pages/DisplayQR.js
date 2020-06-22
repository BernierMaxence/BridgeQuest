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

  //_login =

  static navigationOptions = () => ({
      headerLeft: <Dock/>
  });
    // login={"OUI"}
  // playerId={100}
  // gameId={100}
    render(){
    const { navigation } = this.props;
    const login = navigation.getParam('login');
    const playerId = navigation.getParam('playerId');

    return(
      <SafeAreaView style={styles.mainContainer}>
        <QRCode
          value={`${login}|${playerId}`}
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
