import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

import FeedbackBar from './FeedbackBar';
import ModalMenu from './ModalMenu';
import ClassroomImage from './ClassroomImage';
import ClassroomData from  './ClassroomData';
import { useFeedbackContext } from './Context';
import { getDate } from './Time';

export default function Leftside() {
	const [classroomName, setClassroomName] = useState("")
	const [classroomURI, setClassroomURI] = useState()
	const [classroomList, setClassroomList] = useState([])

	const {log} = useFeedbackContext()
	
	useEffect(() => {
		async function loadData() {
			try {
				const raw = await AsyncStorage.getItem('classroom')
				const parsed = JSON.parse(raw)

				setClassroomName(parsed.name)
				setClassroomURI(parsed.uri)
				setClassroomList(ClassroomData)
			} catch (error) {
				alert(error)
			}
		}

		loadData()
	}, [])

	async function handleModalSelect(params) {
		setClassroomName(params.title)
		setClassroomURI(params.uri)
		await AsyncStorage.setItem('classroom', JSON.stringify({name: params.title, uri: params.uri}))
	}

	async function handleDownload() {
		const filePath = FileSystem.documentDirectory + "roca_observation_" + getDate() + ".txt"
		await FileSystem.writeAsStringAsync(filePath, log)

		await Sharing.shareAsync(filePath)
	}

	return (
		<View style={{flex: 5, backgroundColor: 'skyblue'}}>
			<View style={{flex: 2, flexDirection: 'row'}}>
				<Text style={styles.title}>Classroom:</Text>
				<ModalMenu 
					label={classroomName} 
					style={[styles.title, {textDecorationLine: 'underline'}]} 
					modalHeading='Select a classroom' 
					modalItem={classroomList}
					onPress={handleModalSelect}
				/>
			</View>
			<FeedbackBar />
			<ClassroomImage uri={classroomURI} />
			<View style={{flex: 6, backgroundColor: 'pink'}}>
				<Button title="Download log!" onPress={handleDownload} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 50,
		paddingLeft: 20,
		paddingTop: 20,
	}
});