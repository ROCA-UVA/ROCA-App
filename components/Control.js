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

	callbackFunction = (childData) => {
		this.setState({sectionID: childData})
		console.log({sectionID: childData})
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
					<SectionForm sectionID='1' parentCallback = {this.callbackFunction}/>
					<SectionForm sectionID='2' parentCallback = {this.callbackFunction}/>
					<SectionForm sectionID='3' parentCallback = {this.callbackFunction}/>
					<SectionForm sectionID='4' parentCallback = {this.callbackFunction}/>
					<SectionForm sectionID='5' parentCallback = {this.callbackFunction}/>
					<SectionForm sectionID='6' parentCallback = {this.callbackFunction}/>
				</View>

				<View style={{flex: 3, flexDirection: 'column',padding:10}}>
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
