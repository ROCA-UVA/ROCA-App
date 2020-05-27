import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ClassroomImage extends Component {
	render() {
		return (
			<View style={styles.imageContainer}>
				<Image 
					source={require('../assets/images/RICE-130.jpg')}
					style={styles.image}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 5,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		resizeMode: 'contain',
	}
})