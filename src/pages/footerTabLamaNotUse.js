import React, { Component } from 'react';
import {
    Container, Button, Icon,
    Text, Footer, FooterTab,
    Tab, Tabs, ScrollableTab,
    StyleProvider, List
} from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
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
        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    isLoading:false,
                    dataSource:json.movies,
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
           let movies = this.state.dataSource.map((val,key)=>{
            return  <View key={key} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 30 }}> {val.title} </Text>
        </View>

           })

           return (
            <Container style={{}}>
                {/* <Content> digunakan untuk scrollview pada page */}
               {movies}
                {/* <Footer>
                    <FooterTab style={{ backgroundColor: "white" }}>
                        <Button vertical active>
                            <Icon active name="home" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Home</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Profile')}
                        >
                            <Icon name="person" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Profile</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Inbox')}
                        >
                            <Icon active name="mail" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Inbox</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this.props.navigation.navigate('Transaction')}
                        >
                            <Icon name="document" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Transaction</Text>
                        </Button>
                        <Button vertical
                        onPress={() => this.props.navigation.navigate('Chart')}
                        >
                            <Icon name="cart" style={Styles.iconFooter} />
                            <Text style={Styles.font7Gray}>Cart</Text>
                        </Button>
                    </FooterTab>
                </Footer> */}
    
            </Container>
    
    )
    }

    

    }
}