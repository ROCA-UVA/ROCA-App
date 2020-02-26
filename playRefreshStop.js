import React, { Component } from 'react';
import { Button, Animated, Platform, StyleSheet, Text, PropTypes,TouchableHighlight, TouchableOpacity, View,YellowBox,Alert } from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import styles from './style'

export default class Touchables extends Component {

  _twoOptionAlertHandler=()=>{
    //function to make two option alert
    Alert.alert(
      //title
      'Are you sure?',
      //body
      '',
      [
        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  }

  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
     'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
   ]);
  }

  render() {
    return ( 
           <View style={styles.bottom}>

               {/* Play Button */}
               <TouchableOpacity >
                <View style={styles.controlButton}>
                  <Text style={styles.controlButtonText}>PLAY</Text>
                </View>
              </TouchableOpacity>


               {/* Stop Button */}
              <TouchableOpacity onPress={this._twoOptionAlertHandler}>
                <View style={styles.controlButton}>
                  <Text style={styles.controlButtonText}>STOP</Text>
                </View>
              </TouchableOpacity>

            </View> 

    );
  }
}
