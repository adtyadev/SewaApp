
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
import Verification from './Verification';
import Address from './Address';
import Chat from './Chat';
import Complain from './Complain';
import InputAndSuggestion from './InputAndSuggestion';
import ChangeLanguage from './ChangeLanguage';
import FooterTabNavigation from './FooterTabNavigation';
import VerificationDocument from './VerificationDocument';
import VerificationEmail from './VerificationEmail';
import VerificationEmailCode from './VerificationEmailCode';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const Stack = createStackNavigator();
export default class StackNavigation extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    animationEnabled: false
                }}>
                    <Stack.Screen name="FooterTabNavigation" component={FooterTabNavigation} />
                    <Stack.Screen name="AccountSetting" component={AccountSetting} />
                    <Stack.Screen name="Verification" component={Verification} />
                    <Stack.Screen name="Address" component={Address} />
                    <Stack.Screen name="Chat" component={Chat} />
                    <Stack.Screen name="Complain" component={Complain} />
                    <Stack.Screen name="InputAndSuggestion" component={InputAndSuggestion} />
                    <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
                    <Stack.Screen name="VerificationDocument" component={VerificationDocument}/>
                    <Stack.Screen name="VerificationEmail" component={VerificationEmail}/>
                    <Stack.Screen name="VerificationEmailCode" component={VerificationEmailCode}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}