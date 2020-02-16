import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // height: ((Dimensions.get('window').height) - 100),
    alignItems: 'stretch',
    justifyContent: 'center'

    // marginTop: Constants.statusBarHeight,
  },
  backgroundAbsolute: {
    height: 210,
    width: ((Dimensions.get('window').height)),
    backgroundColor: "#00B0FF",
    position: 'absolute'
  },
  cardNotification: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
    padding: 10,

  },
  cardProfile: {
    marginTop: 180,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "yellow"
  },
  textCardItem: {
    width: 250,
    color: "gray",
    // paddingVertical:20
  },
  cardListCancelCard: {
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10
  },
  cardItemSmall: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  cardItemMedium: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  cardItemLarge: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    paddingBottom: 50,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  fontBold12BlackPd10: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 10
  },
  fontBold14Black: {
    fontSize: 14,
    fontWeight: "bold"
  },
  fontBold12Red: {
    fontSize: 12,
    color: "#DD2C00",
    fontWeight: "bold"
  },
  fontBold15Black: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  fontBold15Blue: {
    fontSize: 15,
    color: "blue",
    fontWeight: "bold"
  },
  imageListCancelCard: {
    height: 60,
    width: 60,
  },
  imageSplashScreen: {
    height: (Dimensions.get('window').height)-100,
    width: (Dimensions.get('window').width)-100,
  },
  headerAccordionSmall: {
    backgroundColor: "#b7daf8",
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 18,
    paddingRight: 10,
    width: 110,
    color: "gray"
  },
  contentAccordionSmall: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 18,
    paddingRight: 10,
  },
  flex1Column: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
  },
  flex1Row: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
  },
  starSmall: {
    fontSize: 20,
    color: "#FF9100",
    lineHeight: 25
  },

  // logoStyle: {
  //   backgroundColor: "red"
  // },

  // textStyle: {
  //   color: 'white',
  //   fontSize: 20
  // },

  // textInputStyle: {
  //   marginTop: 20,
  //   height: 60,
  //   width: 350,
  //   borderColor: '#263238',
  //   borderWidth: 1,
  //   backgroundColor: 'rgba(255,255,255,0.3)',
  //   borderRadius: 50,
  //   fontSize: 20,
  //   paddingHorizontal: 15
  // },

  // buttonStyle: {
  //   marginTop: 50,
  //   height: 60,
  //   width: 350,
  //   fontWeight: '500',
  //   borderColor: '#263238',
  //   borderWidth: 1,
  //   backgroundColor: '#424242',
  //   textAlign: 'center',
  //   borderRadius: 50,
  //   fontSize: 20,
  //   paddingHorizontal: 15
  // },
  // textButtonStyle: {
  //   fontSize: 25,
  //   color: 'white',
  //   fontWeight: "500",
  //   textAlign: 'center',
  //   paddingTop: 12
  // },
  // textSignUpStyle: {
  //   color: 'rgba(255,255,255,0.6)',
  //   fontSize: 20,
  //   textAlign: 'center',
  // }
})