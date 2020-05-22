import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import QRCode from 'react-native-qrcode-svg';
import Dock from './Dock';

class DisplayQR extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logoFromFile: require('./assets/logo.png'),
        }
    }

    static navigationOptions= ({navigation}) => ({
        headerLeft: <Dock/>
    });

    render(){
        const login = this.props.navigation.getParam('login');
        return(
            <SafeAreaView style={styles.container}>
                <QRCode
                    value={login}
                    size={270}
                    color={'white'}
                    backgroundColor={'#2c3e50'}
                />
            </SafeAreaView>
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
    }
});


export default withNavigation(DisplayQR);
