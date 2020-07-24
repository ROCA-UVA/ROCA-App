import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import FeedbackBar from './FeedbackBar';
import ModalMenu from './ModalMenu';
import ClassroomImage from './ClassroomImage';
import ClassroomDatabase from  './ClassroomDatabase';
import BottomMenu from './BottomMenu';

export default function Leftside() {
	const [classroomList, setClassroomList] = useState([])
	const [classroomData, setClassroomData] = useState({})

	useEffect(() => {
		async function loadData() {
			try {
				const raw = await AsyncStorage.getItem('classroom')
				const parsed = JSON.parse(raw)

				setClassroomData(parsed)
				setClassroomList(ClassroomDatabase)
			} catch (error) {
				alert(error)
			}
		}

		loadData()
	}, [])

	async function handleModalSelect(params) {
		setClassroomData(params)
		await AsyncStorage.setItem('classroom', JSON.stringify(params))
	}

	return (
		<View style={{flex: 5, backgroundColor: 'skyblue'}}>
			<View style={{flex: 2, flexDirection: 'row'}}>
				<Text style={styles.title}>Classroom:</Text>
				<ModalMenu 
					label={classroomData.title} 
					style={[styles.title, {textDecorationLine: 'underline'}]} 
					modalHeading='Select a classroom' 
					modalItem={classroomList}
					onPress={handleModalSelect}
				/>
			</View>
			<FeedbackBar />
			<ClassroomImage data={classroomData} />
			<View style={{flex: 6, backgroundColor: 'pink'}}>
				<BottomMenu />
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