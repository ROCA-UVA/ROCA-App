import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('Type comment');

  return (
      <TextInput
        style={{ height: 45, borderColor: 'gray', borderWidth: 1, width: '100%', borderRadius:100, padding: 10}}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
  );
}

const styles = StyleSheet.create({
	input: {
		width: 100,
		//margin: '.5em',
	},
});