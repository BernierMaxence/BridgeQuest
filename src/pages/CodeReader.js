import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';
import Dock from '../dock/Dock';

class CodeReader extends React.Component{

  constructor(props){
    super(props);
    this.state = { }
  }

  static navigationOptions= ({navigation}) => ({
    headerLeft: <Dock/>
  });

  _storeData = async (array) => {
    try {
      await AsyncStorage.setItem('signatures', JSON.stringify(array));
    } catch (error) {
      console.log('error saving data ', error)
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('signatures');
      if (value !== null) {
        return JSON.parse(value);
      } else {
        return [];
      }
    } catch (error) {
      console.log('error retiving data, ', error)
      return [];
    }
  };

  _onBarCodeRead = async (data) => {
    const savedSignatures = await this._retrieveData();
    savedSignatures.push({login : data.data});
    await this._storeData(savedSignatures);
    //const azaz = await this._retrieveData();
    //console.log('azaz ', azaz);
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
