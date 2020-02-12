import React, { Component } from 'react';
import { Container, Body,Badge,Header, Content, Card, CardItem, Text, Icon, Right,StyleProvider } from 'native-base';
import Styles from '../css/Styles';
// import getTheme from '../native-base-theme/components';  
// import styleTheme from '../native-base-theme/variables/platform.js';
export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Content >
          <Card style={Styles.card} >
          <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered >
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem bordered >
             <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
             </CardItem>
             <CardItem bordered >
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem bordered >
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem bordered style={Styles.cardItem} >
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem bordered >
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <Badge>
            <Text>2</Text>
          </Badge>
        </Content>
      </Container>
    );
  }
}