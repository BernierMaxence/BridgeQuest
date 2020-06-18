import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera';

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
    //get sigantures du joueur pour verfier si le qr code est valide
    //si c'est bien un joueur

    //ajouter signature au joueur.

    this.props.navigation.replace("SignatureList")
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
