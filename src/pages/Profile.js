import React, { Component } from 'react';
import { Container, Title, Body, Button, Badge, Header, Content, Card, CardItem, Text, Fab, Footer, FooterTab, Icon, Right, Switch, Left, ListItem, StyleProvider, List } from 'native-base';
import { View, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
import Fabs from '../components/Fabs';



// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';


export default class Profile extends Component {

  render() {
    return (
      <Container >
        <Content >

          <View style={Styles.backgroundAbsolute}>
            <Header style={{ backgroundColor: "#00B0FF", marginTop: StatusBar.currentHeight }} >
              <Left>
                <Button transparent
                  onPress={() => { this.props.navigation.goBack() }}
                >
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Profile</Title>
              </Body>
              <Right>
              </Right>
            </Header>
          </View>

          <Card style={Styles.cardProfile} >
            <View style={{ flex: 1, flexDirection: 'column' }}>

              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                <Icon name="star" style={Styles.starSmall} />
                <Icon name="star" style={Styles.starSmall} />
                <Icon name="star" style={Styles.starSmall} />
                <Icon name="star-half" style={Styles.starSmall} />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", color: "#00B0FF" }}> Admin </Text>
                <Text> Referral ID : 085799599692 </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
                <View style={{ width: 50, height: 70, alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                  <Icon name="star" style={Styles.starSmall} style={{ color: "#5d594d" }} />
                  <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00B0FF" }}> 0 </Text>
                  <Text > Points </Text>
                </View>
                <View style={{ width: 70, height: 70, alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                  <Icon active name="star" style={{ color: "#5d594d" }} />
                  <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00B0FF" }}> 0 </Text>
                  <Text> Points </Text>
                </View>
                <View style={{ width: 50, height: 70, alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
                  <Icon active name="star" style={Styles.starSmall} style={{ color: "#5d594d" }} />
                  <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00B0FF" }}> Rp 0 </Text>
                  <Text> Points </Text>
                </View>
              </View>

            </View>
            <Body style={{ backgroundColor: "red" }}>
              <Text>
              </Text>
            </Body>
            <CardItem bordered button
              onPress={() => {
                this.props.navigation.navigate('AccountSetting')
              }}
            >
              <Icon active name="person" style={{ color: "#5d594d" }} />
              <Text style={Styles.textCardItem}>Account Setting</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem bordered button
              onPress={() => {
                this.props.navigation.navigate('Verification')
              }}
            >
              <Icon active name="finger-print" style={{ color: "#5d594d" }}/>
              <Text style={Styles.textCardItem}>Verification</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem bordered button
              onPress={() => {
                this.props.navigation.navigate('Address')
              }}
            >
              <Icon active name="home" style={{ color: "#5d594d" }}/>
              <Text style={Styles.textCardItem}>Address</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem bordered button
              onPress={() => {
                this.props.navigation.navigate('Chat')
              }}
            >
              <Icon active name="chatbubbles" style={{ color: "#5d594d" }}/>
              <Text style={Styles.textCardItem}>Chat</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem bordered button
              onPress={() => {
                this.props.navigation.navigate('Complain')
              }}
            >
              <Icon active name="call" style={{ color: "#5d594d" }}/>
              <Text style={Styles.textCardItem}>Complain</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem bordered button
              onPress={() => {
                this.props.navigation.navigate('InputAndSuggestion')
              }}
            >
              <Icon active name="infinite" style={{ color: "#5d594d" }}/>
              <Text style={Styles.textCardItem}>Input And Suggestion</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem bordered button
              onPress={() => {
                this.props.navigation.navigate('ChangeLanguage')
              }}
            >
              <Icon active name="globe" style={{ color: "#5d594d" }} />
              <Text style={Styles.textCardItem}>Change Language</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem bordered button>
              <Icon active name="undo" style={{ color: "#5d594d" }} />
              <Text style={Styles.textCardItem}>Sign Out</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

          </Card>

        </Content>
        <Fabs />



      </Container>
    );
  }
}