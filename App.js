import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RightSide from './components/RightSide';
import LeftSide from './components/LeftSide';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <RightSide />
      <LeftSide />
    </View>
  );
}