import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

import { useFeedbackContext } from './Context';
import { getTime } from './Time';

export default function EventButton(props) {
	const [type, setType] = useState(props.type)
	const [title, setTitle] = useState(props.title)

	if (type == "instantaneous") {
		return <InstantaneousEvent title={title} />
	} else if (type == "durational") {
		return <DurationalEvent title={title} /> 
	} else {
		return <Button title="event type not found" disabled={true} buttonStyle={styles.button} />
	}
}

function InstantaneousEvent(props) {
	const {setEvent} = useFeedbackContext()

	function handlePress() {
		setEvent('['+getTime()+'] Event: ' + props.title)
	}

	return (
		<Button title={props.title} buttonStyle={styles.button} onPress={handlePress} />
	)
}

function DurationalEvent(props) {
	const [title, setTitle] = useState(props.title || 'durational')
	const [active, setActive] = useState(false)
	const [style, setStyle] = useState(styles.buttonActive)
	const {setEvent} = useFeedbackContext()

	function handlePress() {
		setActive(!active)

		if (!active) {
			setEvent('['+getTime()+'] Start of event: '+props.title)
		} else {
			setEvent('['+getTime()+'] End of event: '+props.title)
		}
	}

	return (
		<Button title={title} buttonStyle={[styles.button, active && style]} onPress={handlePress} />
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'black',
		borderRadius: 100,
		padding: 10,
		overflow: 'hidden',
		margin: 5
	},
	buttonActive: {
		backgroundColor: 'red',
	}
});