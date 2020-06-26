import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ControlButton from './ControlButton';
import CommentForm from './CommentForm';
import SectionForm from './SectionForm';
// import EventButton from './EventButton';

export default class Control extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'col', backgroundColor: 'pink'}}>
				<View style={{flex: 3, flexDirection: 'row'}}>
					<ControlButton type="Start" />
					<ControlButton type="Reset" />
					<CommentForm/>
				</View>
                <View style={{flex: 5, flexDirection: 'col'}}>
					<SectionForm/>
					<SectionForm/>
					<SectionForm/>
					<SectionForm/>
					<SectionForm/>
				</View>

				{/* <EventButton type="instantaneous" />
				<EventButton type="instantaneous" />
				<EventButton type="instantaneous" /> */}
			</View>
			
		);
	}
}

const styles = StyleSheet.create({

});