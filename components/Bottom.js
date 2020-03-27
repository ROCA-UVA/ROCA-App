import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Bottom extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'pink'}}>
				<Text>Bottom Component (play, stop, commment)</Text>
			</View>
		);
	}
}