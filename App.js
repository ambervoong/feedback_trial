/**
 * Sample Feedback App
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, 
  ImageBackground, Button, Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


// test function for button
let alertFunction = () => Alert.alert("top");

export default class App extends Component<Props> {
  render() {
    return (
      <View>

        <View>       
        <ImageBackground source={require('./images/colorblock.png')} 
                        style={{width: '100%', height: '50%'}}>
          <View >
            <Text style={{color: '#faebd7', fontSize: 40}}>JioToGo</Text>
          </View>
        </ImageBackground>
        </View> 
          
        <View style={styles.container}>
        <Text style={styles.welcome}>Enter feedback Here</Text>
          <TextInput style={styles.input} placeholder="Subject Matter" />

          <TextInput style={styles.input} multiline ={true}
                      numberOfLines = {12} placeholder="Type here..." />
          
        </View>
        <View style={styles.buttoncontainer}>
            <Button title="Submit"
                    onPress={alertFunction}></Button>

          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,  
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  input: {
    textAlign: 'left',
    minHeight: '10%',
    fontSize: 22,
    color: "teal",
    width:'90%',
    margin: 1,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 2,
    
  },

  buttoncontainer: {
    flex:1,
    alignSelf:'flex-end', 
    margin:20,
    paddingTop:50,
    

  }
});
