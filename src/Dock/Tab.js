import React from 'react';
import {StyleSheet, Button, View, TouchableOpacity, Image} from 'react-native';
import { withNavigation } from 'react-navigation';
import tabImages from './Tab_Image.js'


class DisplayQR extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
      const {title, navigationGoal, navigation} = this.props;
      
      return(
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationGoal)}>
            <Image
              source={tabImages[title].uri}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  ImageIcon: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 25
  }
});

export default withNavigation(DisplayQR);
