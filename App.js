import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

import LocalData from './components/LocalData';
import { AppProvider } from './components/Context';

export default function App() {
  return (
    <AppProvider value={{activity: -1, event: "Start recording events!!"}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <LeftSide />
        <RightSide />
      </View>
    </AppProvider>
  );
}