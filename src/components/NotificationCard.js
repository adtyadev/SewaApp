import React, { Component } from 'react';
import {
    Container, Body,
    Text, Card, CardItem, Content,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class NotificationCard extends Component {

    render() {
        return (
            <View>
                {/* <Content> digunakan untuk scrollview pada page */}
                <Card style={Styles.cardNotification}>
                    <CardItem>
                        <View style={Styles.flex1Row}>
                            <Image source={require('../img/times-up.png')} style={Styles.imageListCancelCard} />
                            <View style={Styles.flex1Column}>
                                <Text style={{ paddingLeft: 10 }}> Waktu Pembayaran Anda Telah Berakhir </Text>
                                <Text note style={{ paddingLeft: 10 }}> Waktu Pembayaran Anda Telah Berakhir </Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
            </View>
        )
    }
}