import React, { Component } from 'react';
import {
    Container, Button, Icon,
    Text, Footer, FooterTab,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
import AddressCard from "../components/AddressCard";
import { ActivityIndicator } from 'react-native-paper';

// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';

export default class Home extends Component {

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
                <ActivityIndicator/>
            </View>)
        }else{
           let movies = this.state.dataSource[0].map((val,key)=>{
            return  <View key={key} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
             <AddressCard name={val.name}/>
        </View>

           })

           return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}
               {movies}
            </Container>
    
    )
    }

    

    }
}