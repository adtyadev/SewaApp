import React, { Component } from 'react';
import {
    Container, Card, CardItem,
    Text, Header, Button, Left, Title, Icon, Body, Input,
    Tab, Tabs, ScrollableTab, Right, Item, Label,
    StyleProvider, List, Form, Content,
} from 'native-base';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Styles from '../css/Styles';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);
export default class Register extends Component {

    render() {
        return (
            <Container style={{}}>
                <Content>
                    {/* <Content> digunakan untuk scrollview pada page */}
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "white", alignItems: "center", justifyContent: "center", width: deviceWidth, height: (deviceHeight * 1 / 2) }} >
                            <Image source={require('../img/logo_register.png')}
                                style={{ height: 150, width: 150 }} />
                            <Text style={{ fontSize: 25, }}> S   E   W   A   I   N   D . I   D</Text>
                            <Text style={Styles.lineCenterBlack}> ___________________________________________ </Text>
                            <Text style={{ fontSize: 28, fontWeight: "bold", fontFamily: "Roboto", paddingTop: (deviceHeight * 1 / 5) * 1 / 6 }}> Welcome To Register Page </Text>
                            <Text note style={{ fontSize: 15, fontFamily: "Roboto" }}> Fill up the following detail to register </Text>
                        </View>
                        <View style={{ backgroundColor: "white", width: deviceWidth, height: (deviceHeight - (deviceHeight * 1 / 2.5)) + 50, paddingHorizontal: deviceWidth * 1 / 9, }} >
                            <Form style={{ marginBottom: 20 }}>
                                <Item >
                                    <Label><Ionicons name="ios-contact" color={"#00B0FF"} size={30} /></Label>
                                    <Right>
                                        <Input style={{ fontSize: 20, }} placeholder="Aditya Kharisma Wicaksana" />
                                        {/* <Ionicons name="md-checkmark-circle" color={"green"} size={25} /> */}
                                    </Right>
                                </Item>

                                <Item style={{ paddingTop: (deviceHeight * 1 / 5) * 1 / 5, }} >
                                    <Label><Ionicons name="ios-at" color={"#00B0FF"} size={30} /></Label>
                                    <Right>
                                        <Input style={{ fontSize: 20, }} placeholder="Adtyadev" />
                                        {/* <Ionicons name="md-checkmark-circle" color={"green"} size={25} /> */}
                                    </Right>
                                </Item>

                                <Item style={{ paddingTop: (deviceHeight * 1 / 5) * 1 / 5, }} >
                                    <Label><Ionicons name="ios-mail" color={"#00B0FF"} size={30} /></Label>
                                    <Right>
                                        <Input style={{ fontSize: 20, }} placeholder="adtyadev@admin.id" />
                                        {/* <Ionicons name="md-checkmark-circle" color={"green"} size={25} /> */}
                                    </Right>
                                </Item>

                                <Item style={{ paddingTop: (deviceHeight * 1 / 5) * 1 / 5, }} >
                                    <Label><Ionicons name="ios-lock" color={"#00B0FF"} size={30} /></Label>
                                    <Right>
                                        <Input style={{ fontSize: 20, }} placeholder="* * * * * *" />
                                        {/* <Ionicons name="md-checkmark-circle" color={"green"} size={25} /> */}
                                    </Right>
                                </Item>

                                <Item style={{ paddingTop: (deviceHeight * 1 / 5) * 1 / 5, marginBottom: (deviceHeight * 1 / 5) * 1 / 3 }} >
                                    <Label><Ionicons name="ios-lock" color={"#00B0FF"} size={30} /></Label>
                                    <Right>
                                        <Input style={{ fontSize: 20, }} placeholder="* * * * * *" />
                                        {/* <Ionicons name="md-checkmark-circle" color={"green"} size={25} /> */}
                                    </Right>
                                </Item>
                            </Form>

                            <Button block style={Styles.buttonSquare}
                                onPress={() => { this.props.navigation.navigate('FooterTabNavigation') }}
                            >
                                <Text>Register</Text>
                            </Button>
                            <Text note style={{ textAlign: "center" }}> Have an account? </Text>
                            <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Login') }}
                            >
                            <Text note style={{ fontWeight: "bold", color: "#00B0FF", fontSize: 15, textAlign: "center" }}> Login </Text>
                            </TouchableOpacity>
                            
                        </View>

                    </View>
                </Content>
            </Container>
        )
    }
}