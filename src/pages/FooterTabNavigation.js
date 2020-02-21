import React, { Component } from 'react';
import {
    Container,
    Text,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity, Button } from 'react-native';
import Styles from '../css/Styles';
import Profile from './Profile';
import Transaction from './Transaction';
import Inbox from './Inbox';
import Home from './Home';
import AccountSetting from './AccountSetting';
import Cart from './Cart';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Screen"
                onPress={() => navigation.navigate('Account_Setting')}
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

const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();
export default class FooterTabNavigation extends Component {

    render() {
        return (
            // <Container style={{}}>
            //     <NavigationContainer>
            //         <Stack.Navigator screenOptions={{
            //             headerShown: false,
            //         }}>
            //             <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            //             <Stack.Screen name="Inbox" component={Inbox} options={{ title: 'Inbox' }} />
            //             <Stack.Screen name="Transaction" component={Transaction} options={{title:'Transaction'}}/>
            //             <Stack.Screen name="Profile" component={Profile} options={{title:'Profile'}}/>
            //             <Stack.Screen name="Chart" component={Chart} options={{title:'Chart'}}/>
            //         </Stack.Navigator>
            //     </NavigationContainer>
            // </Container>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#00B0FF',
                    showLabel: true
                }}
                activeColor="#f0edf6"
                inactiveColor="black"
                barStyle={{ backgroundColor: "#00B0FF" }}
            >
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size = 20 }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size = 20 }) => (
                            <Ionicons name="ios-person" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Inbox" component={Inbox}
                    options={{
                        tabBarLabel: 'Inbox',
                        tabBarIcon: ({ color, size = 20 }) => (
                            <Ionicons name="ios-mail" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Transaction" component={Transaction}
                    options={{
                        tabBarLabel: 'Transaction',
                        tabBarIcon: ({ color, size = 20 }) => (
                            <Ionicons name="ios-document" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Cart" component={Cart}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ color, size = 20 }) => (
                            <Ionicons name="ios-cart" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>


        );
    }
}