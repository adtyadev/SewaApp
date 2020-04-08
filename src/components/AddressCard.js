import React, { Component } from 'react';
import { Container, Accordion, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
const dataArray = [
    { title: "Sub detail", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
];
export default class AddressCard extends Component {
    constructor(props) {
        super(props)

        this.state={
            mainAddress:""
        }
    }

    componentDidMount(){
        if (this.props.id == 122) this.setState( { mainAddress:"Alamat Utama" })
    }

    setUtama(){
        if(this.props.id == 122){
            return(
                <Button small style={{
                    backgroundColor: "#00B0FF",
                    marginLeft: 10
                }}>
    
                    <Text style={{
                        color: "white",
                    }} >
    
                        Set Utama </Text>
                </Button>
            )
        }
        
    }


    render() {
        return (
            <View>
                <Card style={Styles.cardAddressCard}>

                    <CardItem style={Styles.cardItemSmall}>

                        <Text style={{
                            fontSize: 15,
                            color: "gray",
                        }}> {this.state.mainAddress} </Text>

                    </CardItem>

                    <CardItem style={Styles.cardItemMedium}>
                        <View style={Styles.flex1Column}>
                            <Text style={Styles.fontBold15Black}>Rumah</Text>
                            <Text note>{this.props.name}</Text>
                        </View>
                        <Text>
                        </Text>
                        <Right>
                            <Ionicons name="ios-pin" color={"black"} size={20} />
                            {/* <Text style={Styles.fontBold15Blue}>Rp 39.600,- </Text> */}
                        </Right>
                    </CardItem>

                    <CardItem >
                        <View style={Styles.flex1Column}>
                            <Text style={{ marginTop: 5 }}>
                                SewaInd, Plaza city, lt 5 SewaInd, Plaza city, lt 5
                                Surakarta No 15
                                Jawa tengah, 1250
                            </Text>
                        </View>
                        <Text>
                        </Text>
                        <Right>
                            {/* <Ionicons name="ios-pin" color={"black"} size={20}/> */}
                            {/* <Text style={Styles.fontBold15Blue}>Rp 39.600,- </Text> */}
                        </Right>
                    </CardItem>


                    <CardItem style={Styles.cardItemSmall}>
                        <View style={Styles.flex1Column}>
                            <Text style={Styles.fontBold15Black}>0815264789125</Text>

                        </View>
                        <Text note> a/n Thomas Budiman</Text>
                        <Right>
                            {/* <Ionicons name="ios-pin" color={"black"} size={20}/> */}
                            {/* <Text style={Styles.fontBold15Blue}>Rp 39.600,- </Text> */}
                        </Right>
                    </CardItem>
                    <CardItem style={Styles.cardItemMedium}>
                        <Left>
                            <Button small style={{
                                backgroundColor: "#f6f6f6",
                            }}>

                                <Text style={{
                                    color: "black",
                                }} >
                                    <Ionicons name="md-create" color="gray" size={15} />
                                  Edit</Text>
                            </Button>

                            {this.setUtama()}
                        </Left>

                        {/* <View style={Styles.flex1Column}>

                        </View>
                        <Text note> a/n Thomas Budiman</Text> */}
                        <Body></Body>
                        <Right>

                            <Button small style={{
                                backgroundColor: "#f6f6f6",
                            }}>

                                <Text style={{
                                    color: "black",
                                }} >
                                    <Ionicons name="md-trash" color="gray" size={15} />
                                  Hapus</Text>
                            </Button>
                            {/* <Ionicons name="ios-pin" color={"black"} size={20}/> */}
                            {/* <Text style={Styles.fontBold15Blue}>Rp 39.600,- </Text> */}
                        </Right>
                    </CardItem>
                </Card>
            </View>

        )
    }
}