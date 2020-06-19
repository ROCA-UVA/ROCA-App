import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ControllerButtons from './ControllerButtons';
import CommentForm from './CommentForm';
import SectionButton from './SectionButton';
import EventButton from './EventButton';

export default class SectionForm extends Component {
	render() {
		return (
			<View>
				<SectionButton/>
			</View>
		);
	}
}

