import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlayButton from './PlayButton';
import StopButton from './StopButton';
import CommentForm from './CommentForm';

export default class Bottom extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row', backgroundColor: 'pink'}}>
                <PlayButton/>
                <StopButton/>
                <CommentForm/>
			</View>
		);
	}
}
