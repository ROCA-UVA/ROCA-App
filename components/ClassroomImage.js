<<<<<<< HEAD
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ClassroomImage extends Component {
	render() {
		return (
			<View style={{flex: 9, backgroundColor: 'white', borderBottomColor: '#C0C1C2', borderBottomWidth: 1,}}>
				<Text>ClassroomImage Component</Text>
			</View>
		);
=======
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ClassroomImage(props) {
	const [classroomURI, setClassroomURI] = useState()

	useEffect(() => {
		setClassroomURI(props.uri)
	})

	return (
		<View style={styles.imageContainer}>
			<Image 
				source={classroomURI}
				style={styles.image}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 9,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		resizeMode: 'contain',
>>>>>>> master
	}
})