import React, { Component } from 'react';
import { View } from 'react-native';

import ActivityMenu from './ActivityMenu';

export default function RightSide() {
	return (
		<View style={{flex: 2, backgroundColor: 'lightblue'}}>
			<ActivityMenu />
			<View style={{flex: 9}}>
			</View>
		</View>
	);
}