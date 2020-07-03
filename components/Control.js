import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ControllerButtons from './ControllerButtons';
import CommentForm from './CommentForm';
import SectionForm from './SectionForm';
import EventButton from './EventButton';

export default class Control extends Component {
	state = { 
		sectionID: '',
	}


	render() {
		return (
			<View style={{flex: 1, flexDirection: 'col', backgroundColor: 'pink'}}>
				<View style={{flex: 1, flexDirection: 'row',padding:10}}>
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

				<View style={{flex: 1, flexDirection: 'row',padding:10}}>
					<SectionForm sectionID='1' />
					<SectionForm sectionID='2' />
					<SectionForm sectionID='3' />
					<SectionForm sectionID='4' />
					<SectionForm sectionID='5' />
					<SectionForm sectionID='6' />
				</View>

				<View style={{flex: 3, flexDirection: 'row',padding:10,alignItems:'center'}}>
					<EventButton type="instantaneous" />
					<EventButton type="instantaneous" />
					<EventButton type="instantaneous" />
				</View>
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
