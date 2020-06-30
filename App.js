import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

import LocalData from './components/LocalData';
import { FeedbackProvider } from './components/Context';

export default function App() {
  return (
  	<FeedbackProvider value={{activity: -1, event: "Start recording events!!"}}>
	  <View style={{flex: 1, flexDirection: 'row'}}>
	    <LeftSide />
	    <RightSide />
	  </View>
	</FeedbackProvider>
  );
}