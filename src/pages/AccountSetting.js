import React, { Component } from 'react';
import {
    Container, Body, Button,
    Badge, Header, Content,Textarea,
    Card, CardItem, Text, Fab,
    Footer, FooterTab, Icon, Right,
    Switch, Left, ListItem, StyleProvider,
    List, Form, Item, Input, Label, DatePicker, Picker
} from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';

export default class AccountSetting extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date(), selected2: undefined };
        this.setDate = this.setDate.bind(this);

    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <Container >
                <Content >
                    <View style={Styles.backgroundAbsolute}></View>

                    <Card style={Styles.cardProfile} >
                        <Form >
                            <View style={Styles.flex1Column}>

                                <View style={Styles.flexCenterRow}>
                                    {/* <Text style={{ fontSize: 22, fontWeight: "bold", color: "#00B0FF" }}> Admin </Text> */}
                                    <Item floatingLabel>
                                        <Label>First name</Label>
                                        <Input style={{ flex: 0.4 }} />
                                    </Item>
                                    <Item floatingLabel last>
                                        <Label>Last name</Label>
                                        <Input style={{ flex: 0.4 }} />
                                    </Item>
                                    {/* <Item regular>
            <Input placeholder='Regular Textbox' style={{flex:0.2}} />
          </Item>
          <Item regular>
            <Input placeholder='Regular Textbox' style={{flex:0.2}} />
          </Item> */}
                                </View>

                                <Item error>
                                    <Input placeholder='Textbox with Error Input' />
                                    <Icon name='close-circle' />
                                </Item>

                                <Item success>
                                    <Input placeholder='Textbox with Success Input' />
                                    <Icon name='checkmark-circle' />
                                </Item>

                                <View style={Styles.flexCenterRow}>
                                    <View style={Styles.flexCenterColumn, { marginTop: 50, justifyContent: "flex-start" }}>
                                        <Text>
                                            Birthdate :
                                    </Text>
                                        <DatePicker
                                            defaultDate={new Date(2018, 4, 4)}
                                            minimumDate={new Date(2018, 1, 1)}
                                            maximumDate={new Date(2018, 12, 31)}
                                            locale={"en"}
                                            timeZoneOffsetInMinutes={undefined}
                                            modalTransparent={false}
                                            animationType={"fade"}
                                            androidMode={"default"}
                                            placeHolderText="Select date"
                                            textStyle={{ color: "green" }}
                                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                                            onDateChange={this.setDate}
                                            disabled={false}
                                        />
                                        <Text note>
                                            Date: {this.state.chosenDate.toString().substr(4, 12)}
                                        </Text>
                                    </View>
                                    <View style={Styles.flexCenterColumn, { justifyContent: "flex-start" }}>
                                        <Text>
                                            Gender :
                                    </Text>
                                        <Item picker>
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                style={{ width: 100 }}
                                                placeholder="Select your SIM"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                selectedValue={this.state.selected2}
                                                onValueChange={this.onValueChange2.bind(this)}
                                            >
                                                <Picker.Item label="Male" value="key0" />
                                                <Picker.Item label="Famele" value="key1" />
                                                <Picker.Item label="Debit Card" value="key2" />
                                                <Picker.Item label="Credit Card" value="key3" />
                                                <Picker.Item label="Net Banking" value="key4" />
                                            </Picker>
                                        </Item>
                                    </View>
                                </View>
                                <View style={Styles.flexCenterColumn, { justifyContent: "flex-start" }}>
                                    <Text note style={{ paddingLeft: 20 }}>
                                        Hobi :
                                        </Text>
                                    <Item>
                                        <Input placeholder="Underline Textbox" value="Photography, Traveling"/>
                                    </Item>
                                </View>
                                <View style={Styles.flexCenterColumn, { justifyContent: "flex-start",marginTop:20 }}>
                                    <Text note style={{ paddingLeft: 20 }}>
                                        Interest :
                                        </Text>
                                    <Textarea rowSpan={4} bordered placeholder="Textarea" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " style={{marginLeft:20 }}/>
                                    
                                </View>


                                <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 22, fontWeight: "bold", color: "#00B0FF" }}> Admin </Text>
                                    <Text> Referral ID : 085799599692 </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
                                    <View style={{ width: 50, height: 70, alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                                        <Icon name="star" style={Styles.starSmall} style={{ color: "black" }} />
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00B0FF" }}> 0 </Text>
                                        <Text > Points </Text>
                                    </View>
                                    <View style={{ width: 70, height: 70, alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                                        <Icon active name="star" />
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00B0FF" }}> 0 </Text>
                                        <Text> Points </Text>
                                    </View>
                                    <View style={{ width: 50, height: 70, alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                                        <Icon active name="star" style={Styles.starSmall} style={{ color: "black" }} />
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00B0FF" }}> Rp 0 </Text>
                                        <Text> Points </Text>
                                    </View>
                                </View>

                            </View>
                        </Form>


                    </Card>

                </Content>
            </Container>
        )
    }
}