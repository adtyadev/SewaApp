import React, { Component } from 'react';
import {
    Container,
    Button,
    Icon,
    Title,
    Header,
    Left, Right, Body,
    Text,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import Styles from '../css/Styles';
import TransactionEmpty from '../components/TransactionEmpty';
import TransactionCanceled from '../components/TransactionCanceled';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Transaction extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: "#00B0FF" }}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>History Transaction</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#00B0FF', height: 2 }} renderTabBar={() => <ScrollableTab />} >
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}
                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Unpaid">

                        <TransactionEmpty />


                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}

                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Paid">
                        <TransactionEmpty />

                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}

                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Accepted">
                        <TransactionEmpty />

                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}

                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Ongoing">
                        <TransactionEmpty />

                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}

                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Completed">
                        <TransactionEmpty />

                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}

                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Canceled">
                        <TransactionCanceled />

                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#fff' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#fff' }}

                        activeTextStyle={{ color: 'black', fontWeight: 'normal' }}
                        heading="Tab7">

                    </Tab>
                </Tabs>
            </Container>
        )
    }
}