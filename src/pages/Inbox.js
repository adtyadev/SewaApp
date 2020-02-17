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

                <Footer>
                    <FooterTab style={{ backgroundColor: "white" }}>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon active name="home" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Home</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Profile')}
                        >
                            <Icon name="person" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Profile</Text>
                        </Button>
                        <Button vertical active
                            onPress={() => this.props.navigation.navigate('Inbox')}
                        >
                            <Icon active name="mail" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Inbox</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Transaction')}
                        >
                            <Icon name="document" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Transaction</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="cart" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Cart</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}