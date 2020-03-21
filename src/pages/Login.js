    import React, { Component } from 'react';
    import {
        Container, Card, CardItem,
        Text, Header, Button, Left, Title, Icon, Body, Input,
        Tab, Tabs, ScrollableTab, Right, Item, Label,
        StyleProvider, List, Form, Content,
    } from 'native-base';
    import { View, Dimensions, TouchableOpacity,Image } from 'react-native';
    import Styles from '../css/Styles';
    import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
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
                        <View style={{ flex: 1.5, backgroundColor: "white", alignItems: "center", justifyContent: "center", width: deviceWidth }} >
                        <Image source={require('../img/logo.png')} 
                        style={{ height: 150,width: 150}} />
                        </View>
                        <View style={{ flex: 0.8, backgroundColor: "white", width: deviceWidth, paddingHorizontal: deviceWidth * 1 / 9}} >
                            <Text style={{ fontSize: 28, fontWeight:"bold", fontFamily:"Roboto" }}> Welcome Back </Text>
                            <Text style={{ fontSize: 28,  fontFamily:"Roboto" }}> Log in to continue </Text>
                            <Text style={{ fontSize: 28,  fontFamily:"Roboto" }}> to SewaInd </Text>
                        </View>
                        <View style={{ flex: 1.5, backgroundColor: "white", width: deviceWidth, paddingHorizontal: deviceWidth * 1 / 9}} >
                        <Form style={{ marginBottom: 20 }}>
                                            <Item >
                                                <Label><Ionicons name="ios-mail" color={"#00B0FF"} size={30} /></Label>
                                                <Right>
                                                <Input style={{ fontSize: 20,}} placeholder="adtyadev@admin.id" />
                                                {/* <Ionicons name="md-checkmark-circle" color={"green"} size={25} /> */}
                                                </Right>
                                            </Item>

                                            <Item style={{paddingTop:(deviceHeight * 1 / 5) * 1 / 5, marginBottom:(deviceHeight * 1 / 5)* 1 / 3}} >
                                                <Label><Ionicons name="ios-lock" color={"#00B0FF"} size={30} /></Label>
                                                <Right>
                                                <Input style={{ fontSize: 20,}} placeholder="* * * * * *" />
                                                {/* <Ionicons name="md-checkmark-circle" color={"green"} size={25} /> */}
                                                </Right>
                                            </Item>
                                        </Form>
                                        
                                        <Button block style={Styles.buttonSquare}
                                            onPress={() => { this.props.navigation.navigate('FooterTabNavigation') }}
                                        >
                                            <Text>Login</Text>
                                        </Button>
                            <Text note style={{ }}> Don't have an account? </Text>
                            <TouchableOpacity
                             onPress={() => { this.props.navigation.navigate('Register') }}
                             >
                            <Text note style={{ fontWeight:"bold", color:"#00B0FF", fontSize:15 }}> Register </Text>
                            </TouchableOpacity>
                            
                        </View>

                    </View>
                </Container>
            )
        }
    }