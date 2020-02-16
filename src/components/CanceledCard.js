import React, { Component } from 'react';
import { Container, Accordion, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const dataArray = [
    { title: "Sub detail", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
];
export default class CardCanceled extends Component {

    render() {
        return (
            <View>
                <Card style={Styles.cardListCancelCard}>

                    <CardItem style={Styles.cardItemSmall}>
                        <Left>
                            <Text style={{
                                fontSize: 10,
                                color: "gray",
                            }}> 10/10/2020 - 15:34:21 </Text>
                        </Left>
                        <Text>
                        </Text>
                        <Right>
                            <Text style={Styles.fontBold12Red}> Canceled </Text>
                        </Right>
                    </CardItem>

                    <CardItem style={Styles.cardItemMedium}>
                        <View style={Styles.flex1Column}>
                            <Text style={Styles.fontBold15Black}>RTS-081019-618d031c</Text>
                            <Text note>Paypal.Paypal</Text>
                        </View>
                        <Text>
                        </Text>
                        <Right>
                            <Text style={Styles.fontBold15Blue}>Rp 39.600,- </Text>
                        </Right>
                    </CardItem>

                    <CardItem style={Styles.cardItemSmall}>
                        <Image source={require('../img/list-empty.png')} style={Styles.imageListCancelCard} />
                        <View style={Styles.flex1Column}>
                            <Text style={Styles.fontBold12BlackPd10}>Baby Bouncer Sugar Baby I Love Bear </Text>
                            <Text note style={{
                                fontSize: 10,
                                paddingLeft: 10
                            }}>April 15, 2020 s/d April 19, 2020</Text>
                            <Text note style={{
                                fontSize: 10,
                                paddingLeft: 170,
                                paddingTop: 10
                            }}>April 15, 2020 s/d April 19, 2020</Text>
                        </View>
                    </CardItem>

                    <CardItem style={Styles.cardItemMedium}>
                        <Left>
                            <Text style={Styles.fontBold14Black}> Sub Total </Text>
                        </Left>
                        <Text>
                        </Text>
                        <Right>
                            <Text style={Styles.fontBold14Black}> Rp 39.600,- </Text>
                        </Right>
                    </CardItem>
                    <Accordion
                        dataArray={dataArray}
                        headerStyle={Styles.headerAccordionSmall}
                        contentStyle={Styles.contentAccordionSmall}
                    />

                    <Button block style={{
                        backgroundColor: "#00B0FF",
                        marginTop: 10
                    }}>
                        <Text style={Styles.fontBold15Black} style={{
                            color: "white"
                        }} >Send Message</Text>
                    </Button>

                </Card>
            </View>

        )
    }
}