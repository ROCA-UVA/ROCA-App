import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ControllerButtons from './ControllerButtons';
import CommentForm from './CommentForm';
import SectionForm from './SectionForm';
import EventButton from './EventButton';

export default class Control extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'col', backgroundColor: 'pink'}}>
				<View style={{flex: 3, flexDirection: 'row', backgroundColor: 'pink'}}>
					<ControllerButtons type="Start" />
					<ControllerButtons type="Reset" />
					<CommentForm/>
				</View>
				<View style={{flex: 2, flexDirection: 'row', backgroundColor: 'pink'}}>
					<SectionForm/>
					<SectionForm/>
					<SectionForm/>
					<SectionForm/>
					<SectionForm/>
				</View>

				<EventButton type="instantaneous" />
				<EventButton type="instantaneous" />
				<EventButton type="instantaneous" />
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	button:{
		width: 50,
		//margin: '2em'
	}
});
