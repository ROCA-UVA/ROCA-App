import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ControllerButtons from './ControllerButtons';
import CommentForm from './CommentForm';

export default class Bottom extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row', backgroundColor: 'pink'}}>
				<ControllerButtons type="Start" />
				<ControllerButtons type="Reset" />
				<CommentForm/>
			</View>

		);
	}
}
