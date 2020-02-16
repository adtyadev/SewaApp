import React, { Component } from 'react';
import {
    Container,
    Text,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class PromoEmpty extends Component {

    render() {
        return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <View style={Styles.flex1Column, { alignItems: "center" }}>
                    <Image
                        style={{ width: 300, height: 200, marginTop: 20 }}
                        source={require('../img/promo-empty.png')}
                    />
                    <Text style={{ fontSize: 18, textAlign: "center" }}>Your Transaction List is Empty</Text>
                    <Text style={{ fontSize: 13, color: "gray", textAlign: "center" }}>Begin renting items and get easier to monitor various deals here</Text>
                </View>
            </Container>
        )
    }
}