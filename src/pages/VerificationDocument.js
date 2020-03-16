import React, { Component } from 'react';
import {
    Container,
    Text, Header, Button, Left, Title, Icon, Body,
    Tab, Tabs, ScrollableTab, Right,
    StyleProvider, List, Badge, Content,
} from 'native-base';
import { View, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import Styles from '../css/Styles';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class VerificationDocument extends Component {

    render() {
        return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}

                <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }} >
                    <Left>
                        <Button transparent
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <View style={Styles.centerOfStatusBar}>
                        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>Document Verification</Text>
                    </View>
                    <Right style={{ marginRight: 0 }}>
                        <Ionicons name="ios-information-circle-outline" color={"white"} size={22} />
                    </Right>
                </Header>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 20 }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={Styles.lineCenterBlue}> ______--______________ </Text>
                    </View>
                    <View style={{ flex: 8, alignItems: "center", backgroundColor: "white", justifyContent: "flex-start" }}>
                        <Text style={{ fontSize: 29, paddingVertical: 15, fontWeight: "bold", color: "#616161" }}>
                            Select the type of document you wish to scan </Text>
                        <Text note style={{ fontSize: 17, lineHeight: 30, textAlign: "left", paddingVertical: 10 }}>
                            We need to determine if an identity document is authentic and belongs to you.
                        </Text>
                        <Text note style={{ fontSize: 17, lineHeight: 30, textAlign: "left", paddingVertical: 10 }}>
                            Indonesia has been set as issuing country of yout documents.
                        </Text>
                        <Button style={{ backgroundColor: "white", marginTop: 40 }}
                            onPress={() => { this.props.navigation.goBack() }}>
                            <Left>
                                <Button transparent
                                >
                                    <Icon name='globe' style={{ color: "gray" }} />
                                    <Text style={{ fontSize: 15, color: "#616161", textAlign: "left", fontWeight: "bold" }}>Passport</Text>
                                </Button>
                            </Left>
                        </Button>
                        <Button bordered danger style={{ backgroundColor: "white", marginTop: 10 }}
                            onPress={() => { this.props.navigation.goBack() }}>
                            <Left>
                                <Button transparent
                                >
                                    <Icon name='card' style={{ color: "#cc0000" }} />
                                    <Text style={{ fontSize: 15, color: "#cc0000", textAlign: "left", fontWeight: "bold" }}>KTP / ID Card</Text>
                                </Button>
                            </Left>
                            <Right style={{ paddingRight: 15 }}>
                                <Ionicons name="md-alert" color={"#cc0000"} size={25}/>
                            </Right>

                        </Button>
                        <Button bordered success style={{ backgroundColor: "white", marginTop: 10 }}
                            onPress={() => { this.props.navigation.navigate('VerificationEmail') }}>
                            <Left style={{}}>
                                <Button transparent
                                >
                                    <Icon name='mail' style={{ color: "green" }} />
                                    <Text style={{ fontSize: 15, color: "green", textAlign: "left", fontWeight: "bold" }}>Email</Text>
                                </Button>
                            </Left>
                            <Right style={{ paddingRight: 15 }}>
                                <Ionicons name="md-checkmark-circle" color={"green"} size={25} />

                            </Right>

                        </Button>
                    </View>

                </View>
            </Container>
        )
    }
}