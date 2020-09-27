import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { Overlay } from 'react-native-elements';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import Icon from 'react-native-vector-icons/FontAwesome';

import FeedbackBar from './FeedbackBar';
import ModalMenu from './ModalMenu';
import ClassroomImage from './ClassroomImage';
import ClassroomDatabase from  './ClassroomDatabase';
import SectionMenu from './SectionMenu';
import EventButton from './EventButton';
import { useAppContext } from './Context';
import { getDate, getTime } from './Time';

export default function Leftside() {
	const [classroomList, setClassroomList] = useState([])
	const [classroomData, setClassroomData] = useState({})
	const [loadMenu, setLoadMenu] = useState(false)
	const [comment, onChangeComment] = useState("Enter comments")
	const [showComment, setShowComment] = useState(false)

	const {status, setStatus, setActivity, setEvent, sections, setSections, log, setLog} = useAppContext()

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
		setEvent('['+getTime()+'] Classroom: ' + params.title)
		await AsyncStorage.setItem('classroom', JSON.stringify(params))
	}

	async function handleDownload() {
		const header = "Date: " + getDate() + "\nClassroom: " + classroomData.title

		const filePath = FileSystem.documentDirectory + "roca_observation_" + getDate() + ".txt"
		await FileSystem.writeAsStringAsync(filePath, header + log)

		await Sharing.shareAsync(filePath)
	}

	function handleStatusButton(newStatus) {
		setStatus(newStatus)

		if (!newStatus) {
			handleDownload()
			handleReset()
		}
	}

	async function handleReset() {
		setStatus(false)
		setLoadMenu(false)
		await AsyncStorage.setItem('classroom', JSON.stringify({title: 'none selected', uri: {}, sections: []}))
		setClassroomData({title: 'none selected', uri: {}, sections: []})
		setSections(JSON.parse(await AsyncStorage.getItem('sections')))
	  setActivity(-1)
	  setLog("")
	}

	return (
		<View style={{flex: 6}}>
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
			<View style={{borderBottomColor: '#C5C5C5', borderBottomWidth: 1}} />
			<View style={{flex: 2, flexDirection: 'row', padding: 10}}>
				{status
					? <EventButton type="confirm" title="Stop" feedback="Observation stopped" onPress={() => handleStatusButton(false)} style={{backgroundColor: '#D71D2D', width: 140}} />
					: <EventButton type="custom" title= "Start" feedback="Observation started" onPress={() => handleStatusButton(true)} style={{backgroundColor: '#1ca65e', width: 140}}/>
				}
				<EventButton type="confirm" title="Reset" feedback="Event reset" onPress={() => handleReset()} style={{width: 140}} />
        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
	        <TouchableOpacity 
	        	onPress={() => setShowComment(true)}
						style={styles.commentButton}
	        >
				  	<Text style={styles.commentButtonText}>Add comment</Text>
	        </TouchableOpacity>
        </View>
        <Overlay
        	isVisible={showComment} 
        	onBackdropPress={() => setShowComment(false)} 
        	overlayStyle={{width: 500, height: 200, position: 'absolute', top: '20%', borderRadius: 10}}
        >
        	<View>
        		<TextInput
		          style={{width: '100%', height: '65%', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#C5C5C5'}}
		          onChangeText={text => onChangeComment(text)}
		          value={comment}
		          enablesReturnKeyAutomatically={true}
		          multiline={true}
		          selectTextOnFocus
		        />
		        <EventButton
		        	type="custom"
		        	title="Submit"
		        	feedback={"Comment: " + comment}
		        	onPress={() => setShowComment(false)}
		        	style={{width: 140, justifyContent: 'center', backgroundColor: "steelblue"}} 
		        />
        	</View>
      	</Overlay>
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
	},
	commentButton: {
		backgroundColor: 'steelblue',
		borderRadius: 100,
		justifyContent: 'center',
		overflow: 'hidden',
		width: 140,
		height: 40,
		margin: 11,
	},
	commentButtonText: {
		textAlign: 'center',
		color: "white",
		fontSize: 16,
	}
});