import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FeedbackBar from './FeedbackBar';
import ClassroomImage from './ClassroomImage';

export default function LeftSide() {
	return (
		<View style={{flex: 5, backgroundColor: 'skyblue'}}>
			<View style={{flex: 2, flexDirection: 'row'}}>
				<Text style={styles.title}>Classroom</Text>
			</View>
			<FeedbackBar />
			<ClassroomImage />
			<View style={{flex: 6, backgroundColor: 'pink'}}>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: 50,
		padding: 20
	}
});