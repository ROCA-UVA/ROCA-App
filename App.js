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
      <View style={{flex: 1,flexDirection:'row'}}>
        <View style={styles.left_side}>

           <View style={styles.header} /> 

           <View style={styles.classroomMapping} />
        </View>

        <View style={styles.right_side} >
          <View style={{ flex: 0.5, backgroundColor: 'semiwhite', paddingTop:20}}>

              {/* Instructor activity drop down button*/}
              <MenuProvider style={{ flexDirection: "column", padding: 30}}>
                <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
                <MenuTrigger style={styles.activityButton} >
                  <Text style={styles.controlButtonText}>Instructor Activity</Text>
                </MenuTrigger  >
                  <MenuOptions>
                    <MenuOption value={"Lecturing"}>
                      <Text style={styles.menuContent}>Lecturing</Text>
                    </MenuOption>
                    <MenuOption value={"Group Discussing"}>
                      <Text style={styles.menuContent}>Group Discussing</Text>
                    </MenuOption>
                    <MenuOption value={"Administrative task"}>
                      <Text style={styles.menuContent}>Administrative task</Text>
                    </MenuOption>
                    <MenuOption value={"Media"}>
                      <Text style={styles.menuContent}>Media</Text>
                    </MenuOption>
                    <MenuOption value={"Idle"} >
                      <Text style={styles.menuContent}>Idle</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </MenuProvider>
          </View>

          <View style={{flex: 2, backgroundColor: 'semiwhite'}}>
              {/* Instance side button */}
              <TouchableOpacity>
                <View style={styles.instanceButton}>
                  <Text style={styles.activityButtonText}>Poses Questions</Text>
                </View>
              </TouchableOpacity>
          </View>
          
        </View>
      </View>

    );
  }
}

