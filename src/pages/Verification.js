import React, { Component } from 'react';
import { 
    Container, 
    Text, Header,Button,Left,Title,Icon,Body,
    Tab, Tabs, ScrollableTab, Right,
    StyleProvider, List } from 'native-base';
import { View, Dimensions, TouchableOpacity,StatusBar } from 'react-native';
import Styles from '../css/Styles';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Verification extends Component {

    render() {
        return (
            <Container style={{backgroundColor: "#23B0FF"}}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }} >
                    <Left>
                        {/* <Button transparent
                            onPress={() => { this.props.navigation.goBack() }}
                        >
                            <Icon name='arrow-back' />
                        </Button> */}
                    </Left>
                    <Body style={Styles.centerOfStatusBar}>
                        <Title>Verification</Title>
                    </Body>
                    <Right style={{ marginRight:0}}>
                    <Ionicons name="ios-information-circle-outline" color={"white"} size={22}/>
                    </Right>
                </Header>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 30 }}> Verification </Text>
                </View>
            </Container>
        )
    }
}