import React, { Component } from 'react';
import {
    Container, Card, CardItem,
    Text, Header, Button, Left, Title, Icon, Body, Input,
    Tab, Tabs, ScrollableTab, Right, Item, Label,
    StyleProvider, List, Form, Content,
} from 'native-base';
import { View, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import Styles from '../css/Styles';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import Modal from "react-native-modal";
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);
export default class VerificationEmail extends Component {

    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return (
            <Container style={{ backgroundColor: "#23B0FF" }}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }} >
                    <Left>
                        <Button transparent
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={Styles.centerOfStatusBar}>
                        <Title>Verification Email</Title>
                    </Body>
                    <Right style={{ marginRight: 0 }}>
                        <TouchableOpacity
                            onPress={this.toggleModal}
                        >
                            <Ionicons name="ios-information-circle-outline" color={"white"} size={22} />
                        </TouchableOpacity>

                    </Right>
                </Header>
                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({ isModalVisible: false })}
                    onSwipeComplete={() => this.setState({ isModalVisible: false })}
                    onBackButtonPress={() => this.setState({ isModalVisible: false })}
                    swipeThreshold={80}
                    swipeDirection="down"
                >
                    <View style={Styles.flex1ColumnCenter}>
                        <View style={{ backgroundColor: "white", borderRadius: 15 }}>
                            <Text note style={{ textAlign: "center", padding: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.!
                    </Text>
                            <Button transparent onPress={this.toggleModal} style={{ alignItem: "center", justifyContent: "center" }}>
                                <Text>Close</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
                {/* <Content> */}
                <Container style={Styles.flex1Column}>
                    <View style={{
                        flex: 1, alignItems: "center",
                        paddingHorizontal: 30,
                        flexDirection: 'column',
                        backgroundColor: "#f7fafb"
                    }}>
                        <Image source={require('../img/verify_email.png')} style={Styles.emailVerifyId,{height: (Dimensions.get('window').height)*19.201/100,
    width: (Dimensions.get('window').width)*41.319/100,marginTop:20}} />
                        <Text style={{ fontSize: deviceWidth * (7.3 / 100), paddingVertical: 15, fontWeight: "bold", color: "#616161" }}>  Verification Email </Text>

                        <Text note style={{ fontSize: deviceWidth * (4.13 / 100), lineHeight: 30, textAlign: "center", paddingVertical: 10 }}>
                            We will send you an email verification code on this email. this code activate for 15 minutes. 
                    </Text>
                        <Text style={{ fontSize: deviceWidth * (4.13 / 100) + 3, lineHeight: 15, textAlign: "center", paddingVertical: 50 }}>
                            Enter your email
                    </Text>
                    </View>

                    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#f7fafb", justifyContent: "flex-start", paddingHorizontal: 30, flexDirection: "column" }}>

                        <Card style={{width:370,borderRadius: 5,padding: 10,}}>
                            <CardItem>

                                <View style={{ flex:1,backgroundColor: "white"}}>

                                    <Form style={{ marginBottom: 20 }}>
                                        <Item >
                                            <Label><Ionicons name="ios-mail" color={"gray"} size={22} /></Label>
                                            <Input placeholder="adtyadev@admin.id" />
                                            <Right>
                                            <Ionicons name="md-checkmark-circle" color={"green"} size={25} />
                                            </Right>
                                        </Item>
                                    </Form>

                                    <Button block style={Styles.buttonStyle}
                                        onPress={() => { this.props.navigation.navigate('VerificationEmailCode') }}
                                    >
                                        <Text>Send Code OTP</Text>
                                    </Button>
                                    
                                        <Text note style={{ fontSize: 17, textAlign: "center", paddingVertical: 5 }}>
                                            Don't recive the code ? </Text> 
                                            <TouchableOpacity
                                        onPress={() => { this.props.navigation.goBack() }}
                                    >
                                        <Text note style={{ fontSize: 17, color: "#23B0FF", textAlign: "center", paddingVertical: 0 }}>
                                        Resend code </Text>
                                    </TouchableOpacity>

                                </View>

                            </CardItem>
                        </Card>



                    </View>



                </Container>
                {/* </Content> */}

            </Container>
        )
    }
}