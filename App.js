import React, { Component } from 'react';
import {ImageBackground, TextInput,  Button, Platform, StyleSheet, Text, PropTypes,TouchableHighlight, TouchableOpacity, View,YellowBox,Alert } from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import styles from './style'

const data = [{ classroom_name: "THN E316" }, { activity_type: "Instructor activities" }, { activity: "Lecturing" }];
export default class Touchables extends Component {
  setActivityType(type) {
    this.setState({
      activity_type: type
    })
  }

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
    this.state = {
      isShow: true,
      classroom_name: data[0]['classroom_name'],
      activity_type: data[1]['activity_type'],
      activity: data[2]['activity'],

    };
};

  render() {
    return ( 
     
      <View style={{flex: 1,flexDirection:'row'}}>
        <View style={styles.left_side}>
           <Text style = {styles.classroom_name}> {this.state.classroom_name} </Text>
           <View style={styles.header}>
           <Text style = {styles.alert_bar}> {this.state.activity_type} </Text>
           <Text style = {styles.alert_bar2}> {this.state.activity}</Text>
           </View>
           
           <View style={styles.classroomMapping}>
           <ImageBackground source={require("./assets/THN-E316.jpg")} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <Text>Inside</Text>
          </ImageBackground>

           </View>

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

              <TextInput style={styles.comment_box} placeholder="Enter Comment"></TextInput>

            </View> 
        </View>

        <View style={styles.right_side} >
          <View style={{ flex: 0.5, backgroundColor: 'semiwhite', paddingTop:20}}>

              {/* Instructor activity drop down button*/}
              <MenuProvider style={{ flexDirection: "column", padding: 30}}>
                <Menu onSelect= {value => this.setActivityType(value)}>
               
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

