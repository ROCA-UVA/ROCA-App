import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import FeedbackBar from './FeedbackBar';
import ModalMenu from './ModalMenu';
import ClassroomImage from './ClassroomImage';
import ClassroomData from  './ClassroomData';

export default function Leftside() {
	const [classroomName, setClassroomName] = useState("")
	const [classroomURI, setClassroomURI] = useState()
	const [classroomList, setClassroomList] = useState([])

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
		setClassroomName(params.name)
		setClassroomURI(params.uri)
		await AsyncStorage.setItem('classroom', JSON.stringify({name: params.name, uri: params.uri}))
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