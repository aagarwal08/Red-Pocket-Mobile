import  React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class SplashScreen extends Component {
  render() {
    <View style = {styles.container}>
        <Text style = {styles.text}>Splash Screen</Text>
    </View>
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    }
});