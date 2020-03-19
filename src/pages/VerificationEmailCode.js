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
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);
export default class VerificationEmailCode extends Component {

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
                    <Body style={Styles.centerOfStatusBar}>
                        <Title>Redeem Code</Title>
                    </Body>
                    <Right style={{ marginRight: 0 }}>
                        <TouchableOpacity
                            onPress={this.toggleModal}
                        >
                            <Ionicons name="ios-information-circle-outline" color={"white"} size={22} />
                        </TouchableOpacity>

                    </Right>
                </Header>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: deviceWidth, height: deviceHeight * 1 / 5, backgroundColor: "#19b7ff" }}>
                        <Text style={{ fontSize: 30, textAlign: "center", paddingTop: (deviceHeight * 1 / 5) * 1 / 4, color: "white" }}> Verify adtyadev@admin.id</Text>
                        <Text style={{ fontSize: 18, textAlign: "center", paddingTop: (deviceHeight * 1 / 5) * 1 / 7, paddingHorizontal: deviceWidth * 1 / 6, color: "white" }}>
                            You have received a confirmation code email </Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                        <Text style={{ fontSize: 18, textAlign: "center", paddingTop: (deviceHeight * 1 / 5) * 1 / 7, paddingHorizontal: deviceWidth * 1 / 6, color: "gray" }}>
                            Please enter the 5 digit verification code sent to adtyadev@admin.id.</Text>
                            <View style={{ paddingHorizontal: deviceWidth * 1 / 6, backgroundColor:"white", flexDirection:"row",alignItems:"center", justifyContent:"center" }}>
            <Item  style={{width:40,height:50, marginHorizontal:10, marginVertical:20, borderColor:"red" }}>
              <Input style={{textAlign:"center"}} placeholder="X" />
            </Item>
            <Item  style={{width:40,height:50, marginHorizontal:10, marginVertical:20, borderColor:"red" }}>
              <Input style={{textAlign:"center"}} placeholder="X" />
            </Item>
            <Item  style={{width:40,height:50, marginHorizontal:10, marginVertical:20, borderColor:"red" }}>
              <Input style={{textAlign:"center"}} placeholder="X" />
            </Item>
            <Item  style={{width:40,height:50, marginHorizontal:10, marginVertical:20, borderColor:"red" }}>
              <Input style={{textAlign:"center"}} placeholder="X" />
            </Item>
            <Item  style={{width:40,height:50, marginHorizontal:10, marginVertical:20, borderColor:"red" }}>
              <Input style={{textAlign:"center"}} placeholder="X" />
            </Item>

                        </View>
                        
                        <View style={{ paddingHorizontal: deviceWidth * 1 / 6, marginTop:10 }}>
                        <Button block style={Styles.button} 
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Text>Continue</Text>
                        </Button>
                        </View>
                        
                    </View>

                </View>
            </Container>
        )
    }
}