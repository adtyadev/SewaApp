import React, { Component } from 'react';
import { 
    Container, 
    Text, 
    Tab, Tabs, ScrollableTab, 
    StyleProvider, List } from 'native-base';
import { View, Dimensions, TouchableOpacity,Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class SplashScreen extends Component {

    render() {
        return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Image source={require('../img/cek.gif')} />
                </View>
            </Container>
        )
    }
}