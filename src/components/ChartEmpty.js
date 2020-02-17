import React, { Component } from 'react';
import { 
    Container, Button,
    Text, 
    Tab, Tabs, ScrollableTab, 
    StyleProvider, List } from 'native-base';
import { View, Dimensions, TouchableOpacity,Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class ChartEmpty extends Component {

    render() {
        return (
            <Container style={Styles.flex1Column,{justifyContent:"space-around", alignItems:"center",}}>
                {/* <Content> digunakan untuk scrollview pada page */}
                    <Text note style={{ fontSize: 15, marginTop:10 }}>Your Shoopinng Chart is Empty</Text>
                    <Image source={require('../img/chart-empty.png')} style={Styles.imageChartEmpty} />
                    <Button style={Styles.buttonStyle}><Text>Shoop Now</Text></Button>
            </Container>
        )
    }
}