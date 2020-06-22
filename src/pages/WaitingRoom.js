import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import CountDown from 'react-native-countdown-component';

import { getGameById } from '../api/BridgeQuest.js'

class WaitingRoom extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      timeLeft : 0,
    }
  }

  async _getDataGamefromId(gameId){
    const game = await getGameById(gameId)
    return {
      dateStart : game.dateStart,
      ongoing : game.ongoing
    }
  }

  // Jour Mois Annee Heure Minute
  _convertGameDateToDate(gameDate){
    var gameDateStart = [0, 0, 0, 0, 0]
    var i = 0
    for (const data of gameDate.split("/")) {
      gameDateStart[i++] = parseInt(data)
    }
    return new Date(
      gameDateStart[2],
      gameDateStart[1] - 1,
      gameDateStart[0],
      gameDateStart[3],
      gameDateStart[4],
      0
    )
  }

  //Annee Mois Jour Heure Minute secondes
  _getSecondUntil(gameDate){
    const todayDate = new Date()
    const convGameDate = this._convertGameDateToDate(gameDate)
    return  Math.trunc((convGameDate.getTime() - todayDate.getTime()) / 1000)
    // console.log(
    //   convGameDate.getSeconds() + ' ' +
    //   convGameDate.getMinutes() + ' ' +
    //   convGameDate.getHours() + ' ' +
    //   convGameDate.getDate() + ' ' +
    //   convGameDate.getMonth() + ' ' +
    //   convGameDate.getFullYear() + ' ')
    //console.log(convGameDate.getTime())
    //timeLeft
  }



  renderCountDown(timeLeft) {
    if (!timeLeft)
      return
    return (
      <CountDown
        style={{top: 70}}
        until={timeLeft}
        onFinish={() => this._updateState()}
        onPress={() => this._updateState()}
        size={30}
        digitStyle={{backgroundColor: '#281a53'}}
        digitTxtStyle={{color: '#e5fdfe'}}
      />
    )
  }

  async _updateState() {
    const gameId = this.props.navigation.getParam('gameId')
    const game = await this._getDataGamefromId(gameId);
    this.setState({
      timeLeft : this._getSecondUntil(game.dateStart)
    });
    //console.log(game)
    if (game.ongoing) {
      const { navigate } = this.props.navigation
      const login = this.props.navigation.getParam('login')
      const playerId = this.props.navigation.getParam('playerId')
      const gameId = this.props.navigation.getParam('gameId')
      navigate("DisplayQR", { login, playerId, gameId })
    }
  }

  componentDidMount() {
    this._updateState()
  }


  render(){
    //const login = this.props.navigation.getParam('login')
    //const playerId = this.props.navigation.getParam('playerId')
    //const gameId = this.props.navigation.getParam('gameId')

    //console.log(login + " " + gameId)
      //<Text style={{...styles.titleStyle, top: 100}}>{this.state.timeLeft}</Text>
      //console.log(this.state.timeLeft)
    return(
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.titleStyle}>Salle d'attente</Text>
        {this.renderCountDown(this.state.timeLeft)}
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({

  mainContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#2c3e50',
    display: 'flex',
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',

  },
  titleStyle: {
    top: 15,
    alignSelf: 'center',
    fontSize: 35,
    color: "#e5fdfe",
    fontWeight: 'bold'
  }

});

export default withNavigation(WaitingRoom);
