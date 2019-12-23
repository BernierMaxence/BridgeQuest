import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import { withNavigation } from 'react-navigation';

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
                <Button 
                    title={title}
                    onPress={() => navigation.navigate(navigationGoal)}

                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    }
});

export default withNavigation(DisplayQR);

