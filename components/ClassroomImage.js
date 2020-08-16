import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

import { useAppContext } from './Context';

export default function ClassroomImage(props) {
	const {sections, setSections} = useAppContext()

	function handleSelect(index) {
		let newSections = [...sections]
		newSections[index].checked = !sections[index].checked
		setSections(newSections)
	}

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
							},
							sections[index].checked && styles.sectionSelected
						]}
						key={index}>
						<TouchableHighlight style={{flex: 1}} onPress={() => handleSelect(index)}>
							<Text style={styles.sectionText}>Section {index+1}</Text>
						</TouchableHighlight>
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
		flex: 10,
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
	sectionSelected: {
		borderColor: '#FBC02D',
	},
	sectionText: {
		textAlign: 'center',
		color: 'white',
	}
})