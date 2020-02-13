import React, { Component } from 'react';
import{
    StyleSheet,
    Dimensions
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // height: ((Dimensions.get('window').height) - 100),
          alignItems:'stretch',
          justifyContent:'center'

        // marginTop: Constants.statusBarHeight,
      },
      backgroundAbsolute:{
        height: 210,
        width:((Dimensions.get('window').height)),
        backgroundColor:"#00B0FF",
        position:'absolute'
      },
      card:{
        marginTop:180,
        marginRight:15,
        marginLeft:15,
        marginBottom:20,
        borderRadius:5,
        padding:10,
      },
      cardItem:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"yellow"
      },
      textCardItem:{
        width:250,
        color:"gray",
       // paddingVertical:20
      }
      // scrollView: {
      //   backgroundColor: 'pink',
      //   marginHorizontal: 0,
      // },
      // viewFlex3: {
      //   height: 330,
      //   justifyContent: 'center',
      //   alignItems: 'center',
    
      // },
    
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