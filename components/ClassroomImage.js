import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, Image, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class ClassroomImage extends Component {
	render() {
		return (
			<View style={{flex: 5, backgroundColor: 'white'}, styles.container}>
				<Text>ClassroomImage Component</Text>
				<View style={styles.rectangle}></View>
				<View style={styles.rectangle2}></View>
				<View style={styles.rectangle3}></View>
				<View style={styles.rectangle4}></View>
				<View style={styles.rectangle5}></View>
				<View style={styles.rectangle6}></View>
				{/* <img src={require('../assets/THN-E316.jpg')} /> */}
				{/* <Image
					source={
					require(
						'../assets/THN-E316.jpg')
					}
				/> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rectangle: {
	  height: 200,
	  width: 400,
	  backgroundColor: 'rgba(52, 52, 52, 0.5)',
	  position: 'absolute', 
	  zIndex: 99,
	  top: '50%',
	  left: '10%',
	  borderWidth: 2,
      borderColor: 'white'
	},
	rectangle2: {
		height: 200,
		width: 400,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '50%',
		left: '49%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle3: {
		height: 65,
		width: 400,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '36%',
		left: '49%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle4: {
		height: 65,
		width: 400,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '36%',
		left: '10%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle5: {
		height: 30,
		width: 350,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '29.8%',
		left: '15%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle6: {
		height: 30,
		width: 350,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '29.8%',
		left: '49%',
		borderWidth: 2,
		borderColor: 'white'
	  },
  });