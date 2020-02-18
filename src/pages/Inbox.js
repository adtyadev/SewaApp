import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title, Text,
    Tab, Tabs, TabHeading, Content, Footer, FooterTab
} from 'native-base';
import { View, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import Styles from '../css/Styles';
import NotificationCards from '../components/NotificationCard';
import PromoEmpty from '../components/PromoEmpty';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Inbox extends Component {

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
                    <Body>
                        <Title>Inbox</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#00B0FF', height: 2 }} >
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}
                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Notification"
                    >
                        <Content>
                            <NotificationCards />
                            <NotificationCards />
                            <NotificationCards />
                            <NotificationCards />
                            <NotificationCards />
                        </Content>

                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}
                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Promo">

                        <PromoEmpty />

                    </Tab>
                </Tabs>
            </Container>
        )
    }
}