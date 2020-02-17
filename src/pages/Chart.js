import React, { Component } from 'react';
import { 
    Container, FooterTab,Icon,Button,
    Text, Footer,Header,Left,Right,
    Tab, Tabs, ScrollableTab, Body,Title,
    StyleProvider, List } from 'native-base';
import { View, Dimensions, TouchableOpacity,StatusBar } from 'react-native';
import Styles from '../css/Styles';
import ChartEmpty from '../components/ChartEmpty';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Chart extends Component {

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
               <ChartEmpty/>
               <Footer >
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
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Inbox')}
                        >
                            <Icon name="mail" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Inbox</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Transaction')}
                        >
                            <Icon name="document" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Transaction</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="cart" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Cart</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}