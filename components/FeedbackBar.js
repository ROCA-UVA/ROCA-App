import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FeedbackBar extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'steelblue'}}>
				<Text>FeedbackBar Component</Text>
			</View>
		);
	}
}