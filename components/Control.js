import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ControllerButtons from './ControllerButtons';
import CommentForm from './CommentForm';
import SectionButton from './SectionButton';
import EventButton from './EventButton';

export default class Control extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'row', backgroundColor: 'pink'}}>
				<ControllerButtons type="Start" />
				<ControllerButtons type="Reset" />
				<CommentForm/>
				<SectionButton/>
				<EventButton type="instantaneous" />
				<EventButton type="instantaneous" />
				<EventButton type="instantaneous" />
				<EventButton type="instantaneous" />
			</View>


		);
	}
}
