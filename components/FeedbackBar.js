import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FeedbackBar extends Component {
	render() {
		return (
			<View style={{flex: 1, backgroundColor: 'steelblue', padding:10}}>
				<View style = {styles.feedbackBar} >
					<Text style = {styles.fb_section1}>Activity type</Text>
					<Text style = {styles.fb_section2}>Activity name</Text>
				</View> 
			</View>
		);
	}
}


const styles = StyleSheet.create({
	feedbackBar: {
        borderRadius: 20,
        overflow: "hidden",
        position: 'relative',
        display: 'flex',
        flexDirection: "row",
		alignSelf:"flex-end",
	},

	fb_section1: {
        color: 'white',
        overflow: "hidden",
        width: "20%",
        padding: 10,
        backgroundColor: '#22AD1E',
        position: 'relative',
        display: 'flex',
		alignItems: "center",
		textAlign: 'center',
	},

	fb_section2: {
		color: 'white',
        padding: 10,
        width: "50%",
        backgroundColor: '#3CCE3C',
        position: 'relative',
        display: 'flex',
        alignItems: "center",
        overflow: "hidden",
        textAlign: 'center',
	}
});