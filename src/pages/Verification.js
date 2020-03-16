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
import Modal from "react-native-modal";
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
// const deviceHeight = (Dimensions.get('window').height)-300;
export default class Verification extends Component {
    
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
                        {/* <Button transparent
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Icon name='arrow-back' />
                        </Button> */}
                    </Left>
                    <Body style={Styles.centerOfStatusBar}>
                        <Title>Verification ID</Title>
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
                onBackButtonPress={()=>this.setState({ isModalVisible: false })}
                swipeThreshold={80}
                swipeDirection="down"
                >
                    <View style={Styles.flex1ColumnCenter}>
                    <View style={{ backgroundColor:"white", borderRadius:15}}>
                    <Text note style={{ textAlign:"center",padding:10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.!
                    </Text>
                    <Button transparent onPress={this.toggleModal} style={{alignItem:"center", justifyContent:"center"}}>
                    <Text>Close</Text>
                    </Button>
                    </View>
                    
                   

                        
                    </View>
                </Modal>
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
                        <Button block style={Styles.buttonStyle}
                            onPress={() => { this.props.navigation.navigate('VerificationDocument') }}
                        >
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