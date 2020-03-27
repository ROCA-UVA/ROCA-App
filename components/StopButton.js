import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class StopButton extends Component {

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