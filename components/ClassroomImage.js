import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ClassroomImage(props) {
	function getSections() {
		if (props.data.sections) {
			return props.data.sections.map((section, index) => {
				return [
					<View 
						style={[
							styles.section,
							{
								height: section.height,
								width: section.width,
								top: section.top,
								left: section.left
							}
						]}
						key={index}>
						<Text style={styles.sectionText}>Section {index+1}</Text>
					</View>
				]
			})
		}
	}

	return (
		<View style={styles.imageContainer}>
			<Image source={props.data.uri} style={styles.image} />
			{getSections()}
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
	},
	section: {
		position: 'absolute', 
		zIndex: 99,
		borderWidth: 2,
		borderColor: 'white',
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		justifyContent: 'center',
	},
	sectionText: {
		textAlign: 'center',
		color: 'white',
	}
})