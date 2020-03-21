import React, { Component } from 'react';
import {
    Container,Content,
    Text, Header, Button, Left, Title, Icon, Body,
    Tab, Tabs, ScrollableTab, Right,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import Styles from '../css/Styles';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import Modal from "react-native-modal";
import AddressCard from "../components/AddressCard";
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
 const deviceHeight = (Dimensions.get('window').height);
 const deviceWidth = (Dimensions.get('window').width);
export default class Address extends Component {

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
                        <Title>Address</Title>
                    </Body>
                    <Right style={{ marginRight: 0}}>
                        <TouchableOpacity
                            onPress={this.toggleModal}
                        >
                            <Ionicons name="ios-add-circle" color={"white"} size={20}>
                            <Title style={{color:"white", fontSize:15}}> Add </Title>
                            </Ionicons>
                            
                        </TouchableOpacity>

                    </Right>
                </Header>
                <AddressCard/>
                <AddressCard/>
                <AddressCard/>
                
            </Container>
        )
    }
}