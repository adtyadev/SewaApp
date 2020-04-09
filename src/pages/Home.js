import React, { Component } from 'react';
import {
    Container, Button, Icon, Body, Label,
    Text, Footer, FooterTab, Item,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List, Input, Right, Left
} from 'native-base';
import { View, Dimensions, TouchableOpacity, Constants, StatusBar, TextInput } from 'react-native';
import Styles from '../css/Styles';
import ImageSlider from 'react-native-image-slider';
import AddressCard from "../components/AddressCard";
import { ActivityIndicator } from 'react-native-paper';
const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            dataSource: null
        }
    }

    // componentDidMount() {
    //     return fetch('https://spmb.uns.ac.id/services/index.php/v1/jalur-masuk/jalur-aktif')
    //         .then((response) => response.json())
    //         .then((json) => {
    //             this.setState({
    //                 isLoading:false,
    //                 dataSource:json.data,
    //             })
    //             return json.movies;
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    render() {

        if (this.state.isLoading) {
            return (<View style={Styles.container}>
                <ActivityIndicator />
            </View>)
        } else {
            return (
                <Container style={{}}>
                    {/* <Content> digunakan untuk scrollview pada page */}
                    <View style={{
                        flex: 1, alignItems: "center", justifyContent: "flex-start",
                        marginTop: StatusBar.currentHeight+5, marginHorizontal: deviceWidth * 1 / 25,
                        backgroundColor: "white"
                    }}>
                        <View style={{ flex: 0.2, backgroundColor: "white", alignItems: "center", flexDirection: "row", justifyContent: "center", width: "100%" }} >
                            <View style={{
                                flex: 1, flexDirection: 'row',
                                justifyContent: 'center', alignItems: 'center',
                                backgroundColor: '#f7f7f7',
                                borderRadius: 10
                            }}>
                            <View style={{
                                flex: 7, flexDirection: 'row',
                                justifyContent: 'center', alignItems: 'center',
                                backgroundColor: '#f7f7f7', borderRadius: 10
                            }}>
                            <Ionicons name="ios-search" color={"gray"} size={20} style={Styles.searchIcon} />
                                <TextInput
                                    style={{
                                        flex: 1,paddingTop: 8,
                                        paddingRight: 10, paddingBottom: 8,
                                        paddingLeft: 0, backgroundColor: '#f7f7f7',
                                        color: '#d9d9da',
                                    }}
                                    placeholder="User Nickname"
                                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                                    underlineColorAndroid="transparent"
                                />

                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row',
                                justifyContent: 'center', alignItems: 'center',
                                backgroundColor: 'white',borderRadius: 10
                            }}>
                                {/* <Ionicons name="ios-mail" color={"#00B0FF"} size={30} style={Styles.searchIcon} /> */}
                            </View>
                                
                            </View>
                        </View>
                        <Text note style={{
                            fontSize:18,
                        }}>Deliver to Shamim Sharani, Chaka </Text>
                        <View style={{ flex: 1.5, backgroundColor: "yellow", alignItems: "center", flexDirection: "row", justifyContent: "center", width: "100%" }} >
                        <ImageSlider images={[
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/any'
  ]}/>
                            <Text style={{ fontSize: 30, }}> . . . . . .</Text>
                            <Text style={{ fontSize: 30, }}> . . . . . .</Text>
                            <Text style={{ fontSize: 30, }}> . . . . . .</Text>
                        </View>

                        <Text style={{ fontSize: 30 }}> . . . . . </Text>
                        <Text style={{ fontSize: 30 }}> . . . . . </Text>
                        <Text style={{ fontSize: 30 }}> . . . . . </Text>
                        <Text style={{ fontSize: 30 }}> . . . . . </Text>
                        <Text style={{ fontSize: 30 }}> . . . . . </Text>

                    </View>
                </Container>
            )
        }



    }
}