import React, { Component } from 'react';
import { Container, Body, Button, Badge, Header, Content, Card, CardItem, Text, Icon, Right, Switch, Left, ListItem, StyleProvider, List } from 'native-base';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Profile extends Component {
  render() {
    return (
      <Container >
        <Content >
          <View style={Styles.backgroundAbsolute}></View>
          <Card style={Styles.card} >
            <CardItem header bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
                <Badge>
                  <Text>2</Text>
                </Badge>
              </Body>
            </CardItem>
            <CardItem bordered button>
              <Icon active name="person" />
              <Text style={Styles.textCardItem}>Account Setting</Text>
              <Right >
                <Icon name="arrow-forward" />

              </Right>
            </CardItem>
            <CardItem bordered button>
              <Icon active name="chatbubbles" />
              <Text style={Styles.textCardItem}>Verification</Text>
              <Right >
                <Icon name="arrow-forward" />

              </Right>
            </CardItem>
            <CardItem bordered button>
              <Icon active name="logo-googleplus" />
              <Text style={Styles.textCardItem}>Address</Text>
              <Right >
                <Icon name="arrow-forward" />

              </Right>
            </CardItem>
            <CardItem bordered button>
              <Icon active name="chatbubbles" />
              <Text style={Styles.textCardItem}>Chat</Text>
              <Right >
                <Icon name="arrow-forward" />

              </Right>
            </CardItem>
            <CardItem bordered button>
              <Icon active name="logo-googleplus" />
              <Text style={Styles.textCardItem}>Complain</Text>
              <Right >
                <Icon name="arrow-forward" />

              </Right>
            </CardItem>
            <CardItem bordered button >
              <Icon active name="logo-googleplus" />
              <Text style={Styles.textCardItem}>Input And Suggestion</Text>
              <Right >
                <Icon name="arrow-forward" />

              </Right>
            </CardItem>
            <CardItem bordered button>
              <Icon active name="logo-googleplus" />
              <Text style={Styles.textCardItem}>Change Language</Text>
              <Right >
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            
          </Card>

        </Content>
      </Container>
    );
  }
}