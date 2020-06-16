import React, { Component } from 'react';
import { View, Text } from 'react-native';
import sectionButton from './sectionButton';

export default class ClassroomImage extends Component {
	render() {
		return (
			<View style={{flex: 5, backgroundColor: 'white'}}>
				<Text>ClassroomImage Component</Text>
				<sectionButton/>
			</View>
		);
	}
}