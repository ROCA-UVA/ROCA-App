import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

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
	const [status, setStatus] = useState(false)
	const [comment, onChangeComment] = useState("Enter comments")
	const [showComment, setShowComment] = useState(false)

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
				{status
					? <EventButton type="confirm" title="Stop" feedback="Observation stopped" onPress={() => setStatus(false)} style={{backgroundColor: 'red'}} />
					: <EventButton type="custom" title="Start" feedback="Observation started" onPress={() => setStatus(true)} />
				}
				<EventButton type="confirm" title="Reset" feedback="Event reset" />
        <TouchableOpacity 
        	onPress={() => setShowComment(true)}
        	style={styles.commentButton}
        >
        	<Text style={styles.commentButtonText}>Add comment</Text>
        </TouchableOpacity>
        <Overlay
        	isVisible={showComment} 
        	onBackdropPress={() => setShowComment(false)} 
        	overlayStyle={{width: 500, height: 300, position: 'absolute', top: '20%'}}
        >
        	<View>
        		<TextInput
		          style={{borderColor: '#FBC02D', borderWidth: 1, width: '100%', height: '80%', padding: 10, borderRadius: 3}}
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
		        	style={{width: 'auto'}} 
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
		backgroundColor: '#FBC02D',
		borderColor: '#FBC02D',
		borderWidth: 1,
		borderRadius: 100,
		justifyContent: 'center',
		overflow: 'hidden',
		width: '60%',
		height: 40,
		margin: 11,
	},
	commentButtonText: {
		textAlign: 'center',
		color: "white",
		fontSize: 16,
	}
});