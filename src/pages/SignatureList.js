import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Dock from '../dock/Dock';

import { getSignatures } from '../api/BridgeQuest.js'

class CodeReader extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      signatures: [
        { "pseudo" : "" }
      ]
    }
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: <Dock/>,
  });

  async UNSAFE_componentWillMount() {
    const savedSignatures = await getSignatures(
      this.props.navigation.getParam('gameId'),
      this.props.navigation.getParam('playerId'));
    console.log(savedSignatures)
    this.setState({signatures: savedSignatures});
  }

  render(){
    const {navigation} = this.props;
    return(
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.signatures}
          contentContainerStyle = {styles.listContainer}
          renderItem={({item}) => <Text>- {item.pseudo}</Text>}>
        </FlatList>
      </View>
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
    alignItems: 'flex-start',
  },
  listContainer: {
    //Arevoir !
    marginTop: 80,
    marginLeft: 8
  }

});

export default withNavigation(CodeReader);
