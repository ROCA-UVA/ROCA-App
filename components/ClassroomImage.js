import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ClassroomImage extends Component {
	render() {
		return (
			<View style={{flex: 9, backgroundColor: 'white', borderBottomColor: '#C0C1C2', borderBottomWidth: 1,}}>
				<Text>ClassroomImage Component</Text>
			</View>
		);
	}
}