import React, { Component } from 'react';
import { Container, Accordion, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
const dataArray = [
    { title: "Sub detail", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
];
export default class TransactionCanceled extends Component {

    render() {
        return (
            <Container style={{
                backgroundColor: "white"
            }}>
                <Card style={{
                    padding: 10,
                    marginRight: 10,
                    marginLeft: 10,
                    marginTop: 20,
                    marginDown: 10
                }}>

                    <CardItem style={{
                        backgroundColor: "white",
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <Left>
                            <Text style={{
                                fontSize: 10,
                                color: "gray",
                            }}> 10/10/2020 - 15:34:21 </Text>
                        </Left>

                        <Text>

                        </Text>

                        <Right>
                            <Text style={{
                                fontSize: 12,
                                color: "#DD2C00",
                                fontWeight: "bold"
                            }}> Canceled </Text>
                        </Right>
                    </CardItem>

                    <CardItem style={{
                        backgroundColor: "white",
                        flex: 1,
                        flexDirection: "row",
                        paddingBottom: 20,
                        paddingTop: 20,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <View style={{
                            backgroundColor: "white",
                            flex: 1,
                            flexDirection: "column",
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                fontWeight: "bold"
                            }}>RTS-081019-618d031c</Text>
                            <Text note>Paypal.Paypal</Text>

                        </View>
                        <Text>

                        </Text>

                        <Right>
                            <Text style={{
                                fontSize: 15,
                                color: "blue",
                                fontWeight: "bold"
                            }}>Rp 39.600,- </Text>
                        </Right>
                    </CardItem>

                    <CardItem style={{
                        backgroundColor: "white",
                        flex: 1,
                        flexDirection: "row",
                        paddingBottom: 50,
                        paddingTop: 50,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <Image source={require('../img/list-empty.png')} style={{ height: 60, width: 60, backgroundColor: "white" }} />
                        <View style={{
                            backgroundColor: "white",
                            flex: 1,
                            flexDirection: "column",
                        }}>


                            <Text style={{
                                fontSize: 12,
                                color: "black",
                                fontWeight: "bold",
                                paddingLeft: 10
                            }}>Baby Bouncer Sugar Baby I Love Bear </Text>
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

                    <CardItem style={{
                        backgroundColor: "white",
                        paddingTop: 10,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <Left>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: "bold"
                            }}> Sub Total </Text>
                        </Left>

                        <Text>

                        </Text>

                        <Right>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: "bold"
                            }}> Rp 39.600,- </Text>
                        </Right>
                    </CardItem>
                    <Accordion
                        dataArray={dataArray}
                        headerStyle={{
                            backgroundColor: "#b7daf8",
                            backgroundColor: "white",
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 18,
                            paddingRight: 10,
                            width: 110,
                            color: "gray"
                        }}
                        contentStyle={{
                            backgroundColor: "white",
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 18,
                            paddingRight: 10,
                        }}
                    />

                    <Button block style={{
                        backgroundColor: "#00B0FF",
                        marginTop: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 15
                        }}>Send Message</Text>
                    </Button>

                </Card>
            </Container>
        )
    }
}