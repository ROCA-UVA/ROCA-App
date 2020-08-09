import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import ModalMenu from './ModalMenu';
import { useAppContext } from './Context';
import { getTime } from './Time';

export default function FeedbackBar() {
	const [activityList, setActivityList] = useState([])
	const [activityName, setActivityName] = useState("")

	const {activity, setActivity, event, setEvent} = useAppContext()

	useEffect(() => {
		async function loadData() {
			try {
				const protocol = await AsyncStorage.getItem('protocol')
				const list = JSON.parse(protocol).activities.instructor
				setActivityList(JSON.parse(protocol).activities)

				if (activity == -1) {
					setActivityName("Select an activity")
				}
			} catch (error) {
				alert(error)
			}
		}

		loadData()
	}, [activity])

	async function handleModalSelect(params) {
		setActivity(params.key)
		setActivityName(params.title)
		setEvent('['+getTime()+'] Activity: ' + params.title)
	}

	return (
		<View style={styles.feedbackBox}>
			<View style={styles.feedbackBar}>
				<View style={styles.feedbackActivity}>
					<ModalMenu 
						label={activityName} 
						style={[styles.feedbackText, {textDecorationLine: 'underline'}]} 
						modalHeading='Select an activity' 
						modalItem={activityList}
						onPress={handleModalSelect}
					/>
				</View>
				<View style={styles.feedbackEvent}>
					<Text numberOfLines={1} style={styles.feedbackText}>{event || 'Start recording events!'}</Text>
				</View>
			</View> 
		</View>
	)
}

const styles = StyleSheet.create({
	feedbackBox: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		padding: 10,
	},
	feedbackBar: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#3CCE3C',
		borderRadius: 100,
	},
	feedbackActivity: {
		flex: 2,
		borderRadius: 100,
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#22AD1E',
	},
	feedbackEvent: {
		flex: 8,
		justifyContent: 'center',
		padding: 10,
	},
	feedbackText: {
		textAlign: 'center',
		color: 'white',
	}
});