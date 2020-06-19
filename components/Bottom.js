import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ControllerButtons from './ControllerButtons';
import CommentForm from './CommentForm';

export default class Bottom extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row', backgroundColor: 'pink',padding:10}}>
				<View style={{width:110}}>
					<ControllerButtons type="Start" />
				</View>
				<View style={{width:110}}>
					<ControllerButtons type="Reset" />
				</View>
				<View style={{width:500,padding:5}} >
					<CommentForm/>
				</View>
			</View>

		);
	}
}

