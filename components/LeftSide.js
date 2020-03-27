import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FeedbackBar from './FeedbackBar';
import ClassroomImage from './ClassroomImage';
import Bottom from './Bottom';

export default function LeftSide() {
	return (
		<View style={{flex: 5, backgroundColor: 'skyblue'}}>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<Text style={styles.title}>Classroom</Text>
			</View>
			<FeedbackBar />
			<ClassroomImage />
			<Bottom/>
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