/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format

 */

import React, {Component} from 'react';
import Navigation from './src/util/Navigation'

console.disableYellowBox = true;

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      
        <Navigation/>
    );
  }
  
}
