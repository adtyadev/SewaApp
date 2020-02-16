import React, { Component } from 'react';
import {
    Container, Button, Icon,
    Text, Footer, FooterTab,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Home extends Component {

    render() {
        return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 30 }}> Home Page </Text>
                </View>
                <Footer>
                    <FooterTab style={{ backgroundColor: "white" }}>
                        <Button vertical>
                            <Icon name="home" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Profile</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="mail" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Inbox</Text>
                        </Button>
                        <Button vertical>
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