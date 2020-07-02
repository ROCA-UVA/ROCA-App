import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('Type comment');

  return (
      <TextInput
        style={{ margin: 11, height: 45, borderColor: '#C0C1C2', borderWidth: 1, width: '60%', borderRadius:100, padding: 10, color: '#C0C1C2'}}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
  );
}

const styles = StyleSheet.create({

});