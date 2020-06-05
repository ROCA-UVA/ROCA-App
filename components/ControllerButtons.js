import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.button}>
          <Button
            title="Stop"
            disabled
          />
        </View>
      </View>
      <View>
        <View style={styles.button}>
          <Button
            title="Play"
          />
        </View>
      </View>
      <View>
        <View style={styles.button} >
          <Button
            title="Reset"
          />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    flexDirection:"row",
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 100,
    padding: 10,
    overflow: 'hidden'
}
});