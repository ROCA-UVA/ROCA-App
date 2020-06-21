import React, { Component } from 'react';
import { Text, View, ScrollView, AsyncStorage } from 'react-native';

import EventButton from './EventButton';

export default class RightSide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activity: '',
			events: {
				instructor: [],
				technology: [],
				student: []
			}
		};
	}

	componentDidMount = () => {
		this.loadData()
	}

	loadData = async () => {
		try {
			let activity_code = await AsyncStorage.getItem('activity')
			this.setState({activity: JSON.parse(activity_code)})

			const protocol = await AsyncStorage.getItem('protocol')
			this.setState({events: JSON.parse(protocol).a_events})
		} catch (error) {
			alert(error)
		}
	}

	getEventData = (type, event) => {
		if (event.dependencies.includes(this.state.activity)) {
			return <EventButton type={event.type} title={event.title} key={event.code} />
		}
	}

	getEventTypes = () => {
		return Object.keys(this.state.events).map((type) => {
			return [
				<Text key={type}>{type}</Text>,
				this.state.events[type].map((event) => {
					return this.getEventData(type, event)
				})
			]
		})
	}

	render() {
		return (
			<View style={{flex: 2, backgroundColor: 'lightblue'}}>
	 			<View style={{flex: 1}}>
	 				<ScrollView>
	 					{this.getEventTypes()}
	 				</ScrollView>
	 			</View>
	 		</View>
		)
	}
}