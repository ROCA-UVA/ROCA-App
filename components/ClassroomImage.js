import React, { Component } from 'react';
import { View, Text,  Image,StyleSheet } from 'react-native';


export default class ClassroomImage extends Component {
	render() {
		return (
			<View style={{flex: 5, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center',}}>
				{/* <Text>ClassroomImage Component</Text> */}
				<View style={styles.rectangle1}><Text>1</Text></View>
				<View style={styles.rectangle2}><Text>2</Text></View>
				<View style={styles.rectangle3}><Text>3</Text></View>
				<View style={styles.rectangle4}><Text>4</Text></View>
				<View style={styles.rectangle5}><Text>5</Text></View>
				<View style={styles.rectangle6}><Text>6</Text></View>
				<Image
					source={
					require(
						'../assets/images/THN-E316.jpg')
					}
				
				/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	rectangle1: {
	  height: 200,
	  width: 480,
	  backgroundColor: 'rgba(52, 52, 52, 0.5)',
	  position: 'absolute', 
	  zIndex: 99,
	  top: '50%',
	  left: '1%',
	  borderWidth: 2,
      borderColor: 'white'
	},
	rectangle2: {
		height: 200,
		width: 480,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '50%',
		left: '50%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle3: {
		height: 65,
		width: 480,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '36%',
		left: '50%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle4: {
		height: 65,
		width: 480,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '36%',
		left: '1%',
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
		left: '14.5%',
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
		left: '50%',
		borderWidth: 2,
		borderColor: 'white'
	  },
  });