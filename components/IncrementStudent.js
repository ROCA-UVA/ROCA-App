import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NumericInput from 'react-native-numeric-input'

export default class IncrementStudent extends Component{
    constructor(props) {
        super(props)
        this.state = {number: ''}
      }
    render(){
        return(
            <View>
                <NumericInput 
                    value={this.state.value} 
                    onChange={value => this.setState({value})} 
                    totalWidth={70} 
                    totalHeight={32} 
                    iconSize={20}
                    step={1}
                    minValue={0}
                    valueType='real'
                    rounded 
                    textColor='black' 
                    iconStyle={{ color: 'black' }} 
                    rightButtonBackgroundColor='white' 
                    leftButtonBackgroundColor='white'/>
			</View>
        );
    }
}