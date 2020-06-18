import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Button, Text, FlatList, Navigator } from 'react-native';
import { withNavigation } from 'react-navigation';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import SafeAreaView from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient';

import { getAllGames, getGameById, putPlayer } from '../api/BridgeQuest.js'

class Login extends React.Component{

  constructor(props){
    super(props);
    this._onPressLogin = this._onPressLogin.bind(this)
    this.state = {
      login: '',
      gameId: 0,
      gameName: 'Selectionne une partie',
      allGames: []
    }
  }

  _onChangeText(text) {
    this.setState({login: text});
  }

  async _onPressLogin() {
    const { login, gameId } = this.state
    if (login && gameId) {
      const { navigate } = this.props.navigation
      var game = await getGameById(gameId)
      var playerId = this._findPlayerIdInGame(game.players, login)
      if (playerId) {
        navigate((game.ongoing) ? "DisplayQR" : "WaitingRoom", { login, playerId, gameId })
        return
      }
      //a revoir (faut que putplayer return un joueur)
      game = await putPlayer(gameId, { pseudo : login })
      playerId = this._findPlayerIdInGame(game.players, login)
      //console.log(login + ' ' + playerId + ' ' + gameId)
      navigate((game.ongoing) ? "DisplayQR" : "WaitingRoom", { login, playerId, gameId })
    }
  }

  _findPlayerIdInGame(game, login) {
    for (const player of game) {
      if (player.pseudo === login) {
        return player.id
      }
    }
    return 0
  }

  _menu = null;

  _setMenuRef(ref) {
    this._menu = ref;
  };

  _showMenu() {
    //pour forcer l'update
    //this.updateStateAllGames()
    if (this.state.allGames)
      this._menu.show();
  };

  _onPressMenu(gameId, gameName) {
    this.setState({gameId, gameName});
    this._menu.hide();
  };

  async _updateStateAllGames() {
    const allGames = await getAllGames()
    //console.log(allGames)
    this.setState({allGames})
  }


  async componentDidMount() {
    this._updateStateAllGames()
  }


  render(){
    return(
      <SafeAreaView style={styles.mainContainer}>
        <LinearGradient
          style={styles.mainContainer}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 1.0}}
          locations={[0,1,1]}
          colors={['#4c669f', '#3b5998', '#192f6a']}>
          <Image
            style={styles.logoStyle}
            source={require('../assets/logo.png')}/>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => this._onChangeText(text)}
            maxLength={40}/>
          <View style={styles.menuContainer}>
            <Menu
              style={styles.menuStyle}
              ref={(ref) => this._setMenuRef(ref)}
              button={
                <Text
                  style={styles.menuTextStyle}
                  onPress={() => this._showMenu()}>{this.state.gameName}</Text>
              }
            >
              <FlatList
                data={this.state.allGames}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MenuItem onPress={() => this._onPressMenu(item.id, item.name)}>{item.name}</MenuItem>}
              />
            </Menu>
          </View>
          <TouchableOpacity onPress={this._onPressLogin}>
            <Image
              style= {styles.buttonStyle}
              source={require('../assets/right_arrow_icon.png')}
            />
          </TouchableOpacity>
        </LinearGradient>
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
    backgroundColor: '#281a53',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: -20,
  },
  logoStyle: {
    width: 200,
    height: 200
  },
  inputStyle: {
    width: 200,
    height: 30,
    borderColor:'#e5fdfe',
    borderRadius: 4,
    borderWidth: 1,
    padding: 5,
    backgroundColor:'#e5fdfe'
  },
  menuContainer: {
    alignSelf: 'flex-start',
    //a revoir !!
    marginLeft: 95,
    //backgroundColor: 'red',
    margin: 10,
    justifyContent: 'center'
  },
  menuStyle:{
    marginTop: 30,
  },
  menuTextStyle:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#e5fdfe'
  },
  buttonStyle: {
    marginLeft: 150,
    width: 50,
    height: 50
  }

});

export default withNavigation(Login);
