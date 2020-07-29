import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native';

import FeedbackBar from './FeedbackBar';
import ModalMenu from './ModalMenu';
import ClassroomImage from './ClassroomImage';
import ClassroomDatabase from  './ClassroomDatabase';
import SectionMenu from './SectionMenu';
import EventButton from './EventButton';
import { useAppContext } from './Context';

export default function Leftside() {
	const [classroomList, setClassroomList] = useState([])
	const [classroomData, setClassroomData] = useState({})
	const [loadMenu, setLoadMenu] = useState(false)
	const [comment, onChangeComment] = useState("Enter comments")

	const {sections, setSections} = useAppContext()

	useEffect(() => {
		async function loadData() {
			try {
				setClassroomList(ClassroomDatabase)
				setClassroomData(JSON.parse(await AsyncStorage.getItem('classroom')))
				setSections(JSON.parse(await AsyncStorage.getItem('sections')))
			} catch (error) {
				alert(error)
			}
		}

		loadData()
	}, [])

	async function handleModalSelect(params) {
		setClassroomData(params)
		setLoadMenu(true)
		await AsyncStorage.setItem('classroom', JSON.stringify(params))
	}

	return (
		<View style={{flex: 6, backgroundColor: 'skyblue'}}>
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
			<View style={{flex: 5}}>
				{loadMenu && <SectionMenu />}
			</View>
			<View style={{flex: 2, flexDirection: 'row', padding: 10, backgroundColor: 'steelblue'}}>
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

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 50,
		paddingLeft: 20,
		paddingTop: 20,
	}
});