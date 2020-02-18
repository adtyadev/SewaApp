// import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Styles from './src/css/Styles';
import Navigation from './src/pages/Navigation';
import Example from './src/pages/example';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/pages/SplashScreen';
import { enableScreens } from 'react-native-screens';
enableScreens();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isLoading: true
    };
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }

  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (

      <Container>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Profile/> */}
        {/* <Transaction/> */}
        {/* <Inbox /> */}
        {/* <Home/> */}
        <Navigation />
        {/* <Example/> */}
      </Container>

    );
  }
}

const styles = StyleSheet.create({

});