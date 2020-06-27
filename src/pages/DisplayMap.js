import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import Dock from '../dock/Dock';
import { apiKey } from '../api/Google.js'

class DisplayMap extends React.Component{

  // constructor(props){
  //     super(props);
  // }

  static navigationOptions = () => ({
      headerLeft: <Dock/>
  });

  render() {
    return(
      <SafeAreaView style={styles.mainContainer}>

      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({

  mainContainer: {
  //   backgroundColor: '#2c3e50',
    width: '100%',
    height: '100%',
  //   display: 'flex',
  //   justifyContent: 'center' ,
  //   alignItems: 'center',
  }

});

export default withNavigation(DisplayMap);
