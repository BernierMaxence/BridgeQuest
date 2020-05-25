import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {withNavigation} from 'react-navigation';
import Tab from './Tab';

class DisplayQR extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
      return(
        <View style={styles.container}>
          <Tab title="QRCODE" navigationGoal="DisplayQR"></Tab>
          <Tab title="SCAN" navigationGoal="CodeReader"></Tab>
          <Tab title="SIGNATURE" navigationGoal="SignatureList"></Tab>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start' ,
        alignItems: 'center',
        flexDirection: 'row',

    }
});

export default withNavigation(DisplayQR);
