import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import { putSignature } from '../api/BridgeQuest.js'

import Dock from '../dock/Dock';

class CodeReader extends React.Component{

  constructor(props){
    super(props);
    this.state = { }
  }

  static navigationOptions= ({navigation}) => ({
    headerLeft: <Dock/>
  });

  // login={"OUI"}
  // playerId={100}
  // gameId={100}

  _onBarCodeRead = async (data) => {
    //horrible
    const raw = data.data.toString().split("|");
    // console.log(data)
    // console.log(raw[1])
    // console.log(raw[0])
    putSignature(
      this.props.navigation.getParam('gameId'),
      this.props.navigation.getParam('playerId'),
      {id : raw[1], pseudo : raw[0]})
    this.props.navigation.replace("SignatureList", {
      login : this.props.navigation.getParam('login'),
      playerId : this.props.navigation.getParam('playerId'),
      gameId : this.props.navigation.getParam('gameId')})
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <RNCamera
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        onBarCodeRead = {this._onBarCodeRead}
        style={styles.preview}
        ref={cam => this.camera = cam}
      >
      </RNCamera>
    )
  }

}

// Etait placé au milieu de <RNCamera>
// <Text
//   style={{
//     backgroundColor: 'white',
//     marginBottom:30,
//   }}>{this.state.barcode}</Text>

const styles = StyleSheet.create({

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }

});

export default withNavigation(CodeReader);
