import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

import { useFeedbackContext } from './Context';
import { getTime } from './Time';

export default function SectionEventButton(props) {

	const [title] = useState(props.title)

		return <InstantaneousEvent title={title} />
	
}

function InstantaneousEvent(props) {
	const {setEvent} = useFeedbackContext()

	function handlePress() {
		setEvent('['+getTime()+'] Event: ' + props.title)
	}

	return (
		<Button titleStyle={styles.buttonText} title={props.title} buttonStyle={styles.button} onPress={handlePress} />
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#4a4e54',
		borderRadius: 100,
		overflow: 'hidden',
		width: 190,
		height: 40,
		margin: 10,
    },
    buttonText:{
        color: "white",
		fontSize: 16,
    }
});