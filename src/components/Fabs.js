import React, { Component } from 'react';
import { 
    Container, 
    Text, Icon,
    Tab, Tabs, ScrollableTab, 
    StyleProvider, List,Fab } from 'native-base';
import { View, Dimensions, TouchableOpacity,Button } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Fabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
      }
    render() {
        return (
            <View style={{}}>
                <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{marginBottom:40}}
          style={{ backgroundColor: '#00B0FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="ios-cloud" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button disabled style={{ backgroundColor: 'gray' }}>
            <Icon name="mail" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>

        </Fab>
            </View>
        )
    }
}