import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FeedbackBar extends Component {
	render() {
		return (
			<View style={styles.feedbackBox}>
				<View style={styles.feedbackBar}>
					<View style={styles.feedbackActivity}>
						<Text numberOfLines={1} style={styles.feedbackText}>Select an activity</Text>
					</View>
					<View style={styles.feedbackEvent}>
						<Text numberOfLines={1} style={styles.feedbackText}>Start recording events</Text>
					</View>
				</View> 
			</View>
		);
	}
}


const styles = StyleSheet.create({
	feedbackBox: {
		flex: 1,
		backgroundColor: 'steelblue',
		padding: 10,
	},
	feedbackBar: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#3CCE3C',
		borderRadius: 100,
	},
	feedbackActivity: {
		flex: 2,
		borderRadius: 100,
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#22AD1E',
	},
	feedbackEvent: {
		flex: 8,
		justifyContent: 'center',
		padding: 10,
	},
	feedbackText: {
		textAlign: 'center',
		color: 'white',
	}
});