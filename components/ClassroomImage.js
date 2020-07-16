import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Rectangle from './Rectangle';

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
			<Rectangle height='12%' width='40%' top='27%' left='10%' sectionID='Sec 1' color='rgba(52, 52, 52, 0.5)'  /> 
			<Rectangle height='12%' width='40%' top='27%' left='50%' sectionID='Sec 2' color='rgba(52, 52, 52, 0.5)'/> 
			<Rectangle height='20%' width='49%' top='40%' left='1%'  sectionID='Sec 3' color='rgba(52, 52, 52, 0.5)'/> 
			<Rectangle height='20%' width='49%' top='40%' left='50%' sectionID='Sec 4' color='rgba(52, 52, 52, 0.5)' /> 
			<Rectangle height='25%' width='49%' top='61%' left='1%'  sectionID='Sec 5' color='rgba(52, 52, 52, 0.5)'/> 
			<Rectangle height='25%' width='49%' top='61%' left='50%' sectionID='Sec 6' color='rgba(52, 52, 52, 0.5)'/> 

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
	}
})