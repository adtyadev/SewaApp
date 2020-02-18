import React, { Component } from 'react';
import { 
    Container, FooterTab,Icon,Button,
    Text, Footer,Header,Left,Right,
    Tab, Tabs, ScrollableTab, Body,Title,
    StyleProvider, List } from 'native-base';
import { View, Dimensions, TouchableOpacity,StatusBar } from 'react-native';
import Styles from '../css/Styles';
import CartEmpty from '../components/CartEmpty';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Cart extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: "#00B0FF" }}>
             <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }}>
                    <Left>
                        <Button transparent 
                        onPress={()=>{this.props.navigation.goBack()}}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Chart</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
               <CartEmpty/>
            </Container>
        )
    }
}