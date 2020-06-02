import React from 'react';
import { View, TextInput, Image, StyleSheet, Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient';

class Login extends React.Component{

  constructor(props){
    super(props);
    this._onPressLogin = this._onPressLogin.bind(this)
    this.state = { login: '' }
  }

  _onChangeText(text) {
    this.setState({login: text});
  }

  _onPressLogin() {
    const {navigate} = this.props.navigation
    const {login} = this.state
    if (login) {
      navigate("DisplayQR", {login})
    }
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
            style={styles.imageStyle}
            source={require('../assets/logo.png')}/>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => this._onChangeText(text)}
            maxLength={40}/>
          <Button
            onPress={this._onPressLogin}
            title={'Go'}/>
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
  imageStyle: {
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
  }

});

export default withNavigation(Login);
