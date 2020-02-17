import React, { Component } from 'react';
import {
    Container,
    Text,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity,Button } from 'react-native';
import Styles from '../css/Styles';
import Profile from './Profile';
import Transaction from './Transaction';
import Inbox from './Inbox';
import Home from './Home';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Screen"
                onPress={() => navigation.navigate('Screen')}
            />
        </View>
    );
}

function Screen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
            />


        </View>
        // <Home />
    );
}
export default class Navigation extends Component {

    render() {
        return (
            <Container style={{}}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                    }}>
                        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                        <Stack.Screen name="Inbox" component={Inbox} options={{ title: 'Inbox' }} />
                        <Stack.Screen name="Transaction" component={Transaction} options={{title:'Transaction'}}/>
                        <Stack.Screen name="Profile" component={Profile} options={{title:'Profile'}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Container>
        )
    }
}