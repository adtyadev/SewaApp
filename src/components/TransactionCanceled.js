import React, { Component } from 'react';
import { Container, Accordion, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
import { View, Dimensions, TouchableOpacity, Image, YellowBox } from 'react-native';
import Styles from '../css/Styles';
import CanceledCard from './CanceledCard';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const dataArray = [
    { title: "Sub detail", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
];
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
export default class TransactionCanceled extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <CanceledCard />
                    <CanceledCard />
                    <CanceledCard />
                </Content>
            </Container>

        )
    }
}