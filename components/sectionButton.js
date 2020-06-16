import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class SectionButton extends Component {
   state = {section: ''}
   updateSection = (section) => {
      this.setState({ section: section })
   }
   render() {
      return (
         <View>
            <Text>Select Section</Text>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{height: 20, width: 100}}>
               <Picker.Item label = "1" value = "1" />
               <Picker.Item label = "2" value = "2" />
               <Picker.Item label = "3" value = "3" />
            </Picker>
            <Text style = {styles.text}>{this.state.section}</Text>
         </View>
      )
   }
}
export default SectionButton

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      color: 'red'
   }
})
