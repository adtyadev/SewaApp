import React, { Component } from 'react';
import {
    Container,Content,
    Text, Header, Button, Left, Title, Icon, Body,
    Tab, Tabs, ScrollableTab, Right,
    StyleProvider, List,Spinner 
} from 'native-base';
import { View, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native';
import Styles from '../css/Styles';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import Modal from "react-native-modal";
import AddressCard from "../components/AddressCard";
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
 const deviceHeight = (Dimensions.get('window').height);
 const deviceWidth = (Dimensions.get('window').width);
 import { ActivityIndicator } from 'react-native-paper';
export default class Address extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount() {
        return fetch('https://spmb.uns.ac.id/services/index.php/v1/jalur-masuk/jalur-aktif')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    isLoading:false,
                    dataSource:json.data,
                })
                return json.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        if(this.state.isLoading){
            return (<View style={Styles.container}>
                <Spinner color='blue'/>
            </View>)
        }else{
           let Address = this.state.dataSource[0].map((val,key)=>{
            return  <AddressCard key={key} name={val.NAMA} id={val.ID}/>
           })

           return (
           
            <Container style={{}}>
            {/* <Content> digunakan untuk scrollview pada page */}
            <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }} >
                <Left>
                    <Button transparent
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={Styles.centerOfStatusBar}>
                    <Title>Address</Title>
                </Body>
                <Right style={{ marginRight: 0}}>
                    <TouchableOpacity
                        onPress={this.toggleModal}
                    >
                        <Ionicons name="ios-add-circle" color={"white"} size={20}>
                        <Title style={{color:"white", fontSize:15}}> Add </Title>
                        </Ionicons>
                        
                    </TouchableOpacity>

                </Right>
            </Header>
            <Content>
            {Address}
            </Content>

            
        </Container>
    
    )
    }

    }
}