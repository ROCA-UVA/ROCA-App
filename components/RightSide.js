import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FeedbackBar from './FeedbackBar';

export default function RightSide() {
	return (
		<View style={{flex: 5, backgroundColor: 'skyblue'}}>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View style={{flex: 1}}>
					<Text style={styles.title}>Classroom</Text>
				</View>
			</View>
			<View style={{flex: 8, backgroundColor: 'white'}}>
				<View style={{flex: 1}}>
					<FeedbackBar />
				</View>
				<View style={{flex: 8}}>
				</View>
				<View style={{flex: 3, backgroundColor: 'pink'}}>
				</View>
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