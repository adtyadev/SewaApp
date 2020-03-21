import React, { Component } from 'react';
import {
    Container, Card, CardItem,
    Text, Header, Button, Left, Title, Icon, Body, Input,
    Tab, Tabs, ScrollableTab, Right, Item, Label,
    StyleProvider, List, Form, Content,
} from 'native-base';
import { View, Dimensions, TouchableOpacity,Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);
export default class Login extends Component {

    render() {
        return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center", width: deviceWidth }} >
                    <Image source={require('../img/logo.png')} 
                    style={{ height: 150,width: 150}} />
                    </View>
                    <View style={{ flex: 0.8, backgroundColor: "white", width: deviceWidth, paddingHorizontal: deviceWidth * 1 / 9}} >
                        <Text style={{ fontSize: 28, fontWeight:"bold", fontFamily:"Roboto" }}> Welcome Back </Text>
                        <Text style={{ fontSize: 28,  fontFamily:"Roboto" }}> Log in to continue </Text>
                        <Text style={{ fontSize: 28,  fontFamily:"Roboto" }}> to SewaInd </Text>
                    </View>
                    <View style={{ flex: 1.5, backgroundColor: "gray", width: deviceWidth, paddingHorizontal: deviceWidth * 1 / 9}} >
                        <Text style={{ fontSize: 30 }}> Login Page </Text>
                    </View>

                </View>
            </Container>
        )
    }
}