/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import SplashScreen from './splash';
import  React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class redPocketApp extends Component {
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
}

componentDidMount() {
    setTimeout( () => {
        this.setTimePassed();
    },2000);
}

setTimePassed() {
    this.setState({timePassed: true});
}
  render() {
    if (!this.state.timePassed) {
      return <SplashScreen/>;
    } 
    else {
      return <WebView source={{ uri: 'https://www.redpocket.com/' }} />;
    }
  }
}
