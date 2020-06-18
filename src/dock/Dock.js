import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Tab from './Tab';

class Dock extends React.Component{

  //constructor(props){
      //super(props);
  //   this.state = { }
  // }

  render(){
    const {login, playerId, gameId} = this.props;
    console.log("\n")
    console.log("log = " + login);
    console.log("playerId = " + playerId);
    console.log("gameId = " + gameId);
    console.log("fin\n")
    return(
      <View style={styles.mainContainer}>
        <Tab title="QRCODE" navigationGoal="DisplayQR"></Tab>
        <Tab title="SCAN" navigationGoal="CodeReader"></Tab>
        <Tab title="SIGNATURE" navigationGoal="SignatureList"></Tab>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    //justifyContent: 'flex-start' ,
    alignItems: 'center',
    flexDirection: 'row',
  }

});

export default withNavigation(Dock);
