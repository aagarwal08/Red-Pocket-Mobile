import  React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';


export default class SplashScreen extends Component {
  render() {
      return (
        <View style = {styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('./redPocketSplash.png')}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});