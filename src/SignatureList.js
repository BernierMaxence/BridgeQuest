import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Dock from './Dock';


class CodeReader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signatures: [
            ]
        }
    }

    static navigationOptions= ({navigation}) => ({
        headerLeft: <Dock/>,
    });

    async componentWillMount() {
        const savedSignatures = await this._retrieveData();
        this.setState({signatures: savedSignatures });
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('signatures');
            if (value !== null) {
                return JSON.parse(value);
            }
        } catch (error) {
            return [];
        }
    };
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.signatures}
                    contentContainerStyle = {styles.list}
                    renderItem={({item}) => <Text>- {item.login}</Text>}>
                </FlatList>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2c3e50',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center' ,
      alignItems: 'center',
    },
    list: {
      marginTop: 55,
      marginLeft: 8
    },
});

export default withNavigation(CodeReader);
