import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, AsyncStorage } from 'react-native';

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

	function getEventData(event) {
		if (event.dependencies.includes(activity)) {
			return <EventButton type={event.type} title={event.title} key={event.code} />
		}
	}

	function getEventTypes() {
		return Object.keys(events).map((type) => {
			return [
				<Text style={styles.heading} key={type}>{type}</Text>,
				<View style={{flexDirection: 'row', flexWrap: 'wrap'}} key={type + '_view'}>
					{
						events[type].map((event) => {
							return getEventData(event)
						})	
					}
				</View>
			]
		})
	}

	return (
		<View style={{flex: 2, borderLeftColor: '#C5C5C5', borderLeftWidth: 1}}>
			{activity == -1 || activity == 5
				? <Text style={styles.heading}>No data available</Text>
				: <ScrollView>
						{getEventTypes()}
					</ScrollView>
			}
 		</View>
	)
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		textAlign: 'center',
		backgroundColor: 'lightgray',
	}
});
