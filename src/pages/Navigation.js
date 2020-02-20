
import React, { Component } from 'react';
import { 
    Container, 
    Text, 
    Tab, Tabs, ScrollableTab, 
    StyleProvider, List } from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
import AccountSetting from './AccountSetting';
import FooterTabNavigation from './FooterTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const Stack = createStackNavigator();
export default class SimpleTemplate extends Component {

    render() {
        return (
            <NavigationContainer>
             <Stack.Navigator>
                    <Stack.Screen name="FooterTabNavigation" component={FooterTabNavigation} />
                    <Stack.Screen name="AccountSetting" component={AccountSetting} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}