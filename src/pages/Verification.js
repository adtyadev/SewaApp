import React, { Component } from 'react';
import {
    Container,
    Text, Header, Button, Left, Title, Icon, Body,
    Tab, Tabs, ScrollableTab, Right,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import Styles from '../css/Styles';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Verification extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: "#23B0FF" }}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }} >
                    <Left>
                        {/* <Button transparent
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Icon name='arrow-back' />
                        </Button> */}
                    </Left>
                    <Body style={Styles.centerOfStatusBar}>
                        <Title>Verification</Title>
                    </Body>
                    <Right style={{ marginRight: 0 }}>
                        <Ionicons name="ios-information-circle-outline" color={"white"} size={22} />
                    </Right>
                </Header>
                <Container style={Styles.flex1Column}>
                    <View style={{
                        flex: 2, alignItems: "center",
                        paddingHorizontal: 30,
                        flexDirection: 'column'
                    }}>
                        <Image source={require('../img/verify_id.png')} style={Styles.imageVerifyId} />
                        <Text style={{ fontSize: 30, paddingVertical: 15, fontWeight: "bold", color: "#616161" }}> We need to verify your ID </Text>

                        <Text note style={{ fontSize: 17, lineHeight: 30, textAlign: "center", paddingVertical: 10 }}>
                            In order to create an account, we need to be 100% sure that You are You. As we're a
                            financial service. we have to comply with KYC and AML requirements.
                    </Text>
                        <Text note style={{ fontSize: 17, lineHeight: 30, textAlign: "center", paddingVertical: 10 }}>
                            You just need to go through some steps which will help up to build a secure system together.
                    </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 30, flexDirection: "column" }}>
                        <Button block style={Styles.buttonStyle}>
                            <Text>Verify</Text>
                        </Button>
                        <TouchableOpacity 
                        onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Text note style={{ fontSize: 17, color: "#23B0FF", lineHeight: 30, textAlign: "center", paddingVertical: 10 }}>
                                Don't have ID. Cancel Verification
                    </Text>
                        </TouchableOpacity>

                    </View>

                </Container>
            </Container>
        )
    }
}