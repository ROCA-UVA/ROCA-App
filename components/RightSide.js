import React, { Component } from 'react';
import { View , StyleSheet} from 'react-native';
import EventButton from './EventButton';
import EventDropdown from './EventDropdown';


export default function RightSide() {
	return (
		
		<View style={{flex: 2, backgroundColor: 'lightblue', padding:10}}>
			<View style={{flex: 1}}>


				<EventDropdown />

				<EventButton type="instantaneous" />
				<EventButton type="durational" />
				<EventButton type="bar" />

			</View>
		</View>
	);
}


