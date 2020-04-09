import React, { Component } from 'react';
import { View } from 'react-native';

import EventButton from './EventButton';

export default function RightSide() {
	return (
		<View style={{flex: 2, backgroundColor: 'lightblue'}}>
			<View style={{flex: 1}}>
				<EventButton type="instantaneous" />
				<EventButton type="durational" />
				<EventButton type="bar" />
			</View>
		</View>
	);
}