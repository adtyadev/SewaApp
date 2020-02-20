import React, { Component } from 'react';
import {
    Container,
    Text,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
import AccountSetting from './AccountSetting';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const Stack = createStackNavigator();
export default class ProfileNav extends Component {

    render() {
        return (
            <Container style={{}}>
                <Stack.Navigator>
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Account_Setting" component={AccountSetting} />
                </Stack.Navigator>
            </Container>
        )
    }
}