import React, { Component } from 'react';
import {
    Container, Card, CardItem,
    Text, Header, Button, Left, Title, Icon, Body, Input,
    Tab, Tabs, ScrollableTab, Right, Item, Label,
    StyleProvider, List, Form, Content,
} from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Chat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            seconds: 0

        }
    }

    tick() {
        this.setState((state, props) => ({
            seconds: this.state.seconds + 1
        })
        )
    }

    handleClick(click) {
        if(click==null){
            this.setState((state, props) => ({
                count: this.state.count + 1
            }))
        }else{
            this.setState((state, props) => ({
                count: this.state.count + click
            }))
        }
       

    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 30 }}> Timer Seconds : {this.state.seconds} </Text>

                    <View style={Styles.flexCenterRow}>
                    <Button block style={{
                        fontWeight: 'bold',
                        backgroundColor: '#00B0FF',
                        textAlign: 'center',
                        margin: 25,
                        borderRadius: 10,
                        fontSize: 15,
                        paddingVertical: 15,
                        paddingHorizontal: 25
                    }}
                        onPress={this.handleClick.bind(this,null)}
                    >
                        <Text>Click Me ++1</Text>
                    </Button>

                    <Button block style={{
                        fontWeight: 'bold',
                        backgroundColor: '#00B0FF',
                        textAlign: 'center',
                        margin: 25,
                        borderRadius: 10,
                        fontSize: 15,
                        paddingVertical: 50,
                        paddingHorizontal: 25
                    }}
                        onPress={this.handleClick.bind(this,2)}
                    >
                        <Text>Click Me ++2</Text>
                    </Button>
                    </View>


                    <Text style={{ fontSize: 30 }}> {this.state.count} </Text>
                </View>
            </Container>
        )
    }
}