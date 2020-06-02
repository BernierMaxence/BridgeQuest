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
        headerLeft: <Dock/>
    });

    render(){
      const login = this.props.navigation.getParam('login');
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
