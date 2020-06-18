import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import icons from './Icons.js'

class Tab extends React.Component{

  // constructor(props){
  //     super(props);
  //     this.state = { }
  // }

  render(){
    const {title, navigationGoal, navigation} = this.props;
    return(
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationGoal)}>
          <Image
            source={icons[title].uri}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  iconStyle: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 25
  }

});

export default withNavigation(Tab);
