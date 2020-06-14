import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import FeedbackBar from './FeedbackBar';
import ClassroomImage from './ClassroomImage';
import ModalMenu from './ModalMenu';

export default function Leftside() {
	const [classroom, setClassroom] = useState("")
	const [classroomList, setClassroomList] = useState([])

	useEffect(() => {
		async function loadData() {
			try {
				setClassroom(await AsyncStorage.getItem('classroom'))

				let protocol = await AsyncStorage.getItem('protocol')
				setClassroomList(JSON.parse(protocol).rooms)
			} catch (error) {
				alert(error)
			}
		}

		loadData()
	}, [])

	async function handleModalSelect(params) {
		setClassroom(params.name)
		await AsyncStorage.setItem('classroom', params.name)
	}

	return (
		<View style={{flex: 5, backgroundColor: 'skyblue'}}>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<Text style={styles.title}>Classroom:</Text>
				<ModalMenu 
					label={classroom} 
					style={[styles.title, {textDecorationLine: 'underline'}]} 
					modalHeading='Select a classroom' 
					modalItem={classroomList}
					onPress={handleModalSelect}
				/>
			</View>
			<FeedbackBar />
			<ClassroomImage />
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