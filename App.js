import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import StopButton from './components/StopButton';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <LeftSide />
      <RightSide />
    </View>
  );
}