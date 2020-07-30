import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

import { useAppContext } from './Context';
import { getTime } from './Time';

export default function EventButton(props) {
	if (props.type == "instantaneous") {
		return <InstantaneousEvent title={props.title} />
	} else if (props.type == "durational") {
		return <DurationalEvent title={props.title} /> 
	} else if (props.type == "confirm") {
		return <ConfirmEvent title={props.title} feedback={props.feedback} onPress={props.onPress} style={props.style} />
	} else if (props.type == "custom") {
		return <CustomEvent title={props.title} feedback={props.feedback} onPress={props.onPress} style={props.style} />
	} else {
		return <Button titleStyle={styles.buttonTitle} title="event type not found" disabled={true} buttonStyle={styles.button} />
	}
}

function InstantaneousEvent(props) {
	const {setEvent} = useAppContext()

	function handlePress() {
		setEvent('['+getTime()+'] Event: ' + props.title)
	}

	return (
		<Button titleStyle={styles.buttonTitle} title={props.title} buttonStyle={styles.button} onPress={handlePress} />
	)
}

function DurationalEvent(props) {
	const [title, setTitle] = useState(props.title || 'durational')
	const [active, setActive] = useState(false)
	const [style, setStyle] = useState(styles.buttonActive)
	const {setEvent} = useAppContext()

	function handlePress() {
		setActive(!active)

		if (!active) {
			setEvent('['+getTime()+'] Start of event: '+props.title)
		} else {
			setEvent('['+getTime()+'] End of event: '+props.title)
		}
	}

	return (
		<Button titleStyle={styles.buttonTitle} title={title} buttonStyle={[styles.button, active && style]} onPress={handlePress} />
	)
}

function ConfirmEvent(props) {
	const [title, setTitle] = useState(props.title)
	const {setEvent} = useAppContext()

	function handlePress() {
		setEvent('['+getTime()+'] ' + props.feedback)
		if (props.onPress) {
			props.onPress()
		}
	}

	function handleConfirm() {
		Alert.alert(
			"Are you sure you want to perform this action?",
			"This cannot be undone",
			[
				{text: "Cancel"},
				{text: title, onPress: handlePress}
			]
		)
	}

	return (
		<Button titleStyle={styles.buttonTitle} title={title} buttonStyle={[styles.button, props.style]} onPress={handleConfirm} />
	)
}

function CustomEvent(props) {
	const [title, setTitle] = useState(props.title)
	const {setEvent} = useAppContext()

	function handlePress() {
		setEvent('['+getTime()+'] ' + props.feedback)
		if (props.onPress) {
			props.onPress()
		}
	}

	return (
		<Button titleStyle={styles.buttonTitle} title={title} buttonStyle={[styles.button, props.style]} onPress={handlePress} />
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#FBC02D',
		borderRadius: 100,
		overflow: 'hidden',
		width: 140,
		height: 40,
		margin: 11,
	},
	buttonActive: {
		backgroundColor: 'red',
	},
	buttonTitle: {
		color: "white",
		fontSize: 16,
	}
});