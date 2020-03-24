import React, { Component } from 'react';
import { View , StyleSheet} from 'react-native';
import EventButton from './EventButton';
import EventDropdown from './EventDropdown';

//https://reactnativeexample.com/material-dropdown-with-consistent-behaviour-on-ios-and-android/

export default function RightSide() {
	return (
		
		<View style={{flex: 2, backgroundColor: 'lightblue', padding:10}}>
			<View style={{flex: 1}}>


				<EventDropdown type="Instructor" />
				<EventDropdown type="Student" />

				<EventButton type="instantaneous" />
				<EventButton type="durational" />
				<EventButton type="bar" />

			</View>
		</View>
	);
}


