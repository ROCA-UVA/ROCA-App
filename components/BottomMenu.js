import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { CheckBox } from 'react-native-elements';

import EventButton from './EventButton';
import { useFeedbackContext } from './Context';

export default function BottomMenu() {
	const [events, setEvents] = useState({})
	const [comment, onChangeComment] = useState("Enter comments")
	const [sections, setSections] = useState([])

	const {activity} = useFeedbackContext()

	useEffect(() => {
		async function loadData() {
			try {
				const protocol = await AsyncStorage.getItem('protocol')
				setEvents(JSON.parse(protocol).z_events)

				setSections(JSON.parse(await AsyncStorage.getItem('sections')))
			} catch {
				alert(error)
			}
		}

		loadData()

		return async () => {
			await AsyncStorage.setItem('sections', sections)
		}
	}, [])

	function getEventData(type, event) {
		if (event.dependencies.includes(activity)) {
			return <EventButton type={event.type} title={event.title} key={event.code} />
		}
	}

	function getEventTypes() {
		return Object.keys(events).map((type) => {
			return [
				events[type].map((event) => {
					return getEventData(type, event)
				})
			]
		})
	}

	function handleCheckBox(value, index, section) {
		let newSections = [...sections]
		newSections[index].checked = value
		setSections(newSections)
	}

	function getSectionData(section, index) {
		return [
			<View style={{flexDirection: 'row'}} key={index}>
				<Text>{section.count}</Text>
				<CheckBox 
					title={"Section " + (index+1)} 
					checked={section.checked} 
					onPress={() => handleCheckBox(!section.checked, index, section)}
				/>
			</View>
		]
	}

	function getSectionOptions() {
		return sections.map((section, index) => {
			return getSectionData(section, index)
		})
	}

	return (
		<View style={{flex: 1}}>
			<View style={{flex: 3, flexDirection: 'row'}}>
				<View style={{flex: 3, flexWrap: 'wrap', padding: 10, justifyContent: 'center', alignContent: 'center', backgroundColor: 'lightblue'}}>
					{getSectionOptions()}
				</View>
				<View style={{flex: 2, flexWrap: 'wrap', padding: 10, justifyContent: 'center', alignContent: 'center', backgroundColor: 'skyblue'}}>
					{getEventTypes()}
				</View>
			</View>
			<View style={{flex: 1, flexDirection: 'row', padding: 10, backgroundColor: 'steelblue'}}>
				<EventButton type="instantaneous" title="Start" />
				<EventButton type="instantaneous" title="Reset" />
				<TextInput
					style={{flex: 1, borderColor: 'white', borderWidth: 1, height: 40, borderRadius: 100, padding: 10, margin: 10, color: 'white'}}
					onChangeText={text => onChangeComment(text)}
					value={comment}
				/>
			</View>
		</View>
	)
}