import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, AsyncStorage } from 'react-native';

import EventButton from './EventButton';
import { useAppContext } from './Context';

export default function RightSide() {
	const [events, setEvents] = useState({})

	const {activity} = useAppContext()

	useEffect(() => {
		async function loadData() {
			try {
				const protocol = await AsyncStorage.getItem('protocol')
				setEvents(JSON.parse(protocol).a_events)
			} catch (error) {
				alert(error)
			}
		}

		loadData()
	}, [])

	function getEventData(type, event) {
		if (event.dependencies.includes(activity)) {
			return <EventButton type={event.type} title={event.title} key={event.code} />
		}
	}

	function getEventTypes() {
		return Object.keys(events).map((type) => {
			return [
				<Text key={type}>{type}</Text>,
				events[type].map((event) => {
					return getEventData(type, event)
				})
			]
		})
	}

	return (
		<View style={{flex: 2, backgroundColor: '#EDEDED'}}>
 			<View style={{flex: 1}}>
 				<ScrollView>
 					{getEventTypes()}
 				</ScrollView>
 			</View>
 		</View>
	)
}
