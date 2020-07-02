import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class EventButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: ''
		}
	}

	componentDidMount = () => {
		this.setState({type: this.props.type})
	}

	render() {
		if (this.state.type == "instantaneous") {
			return <InstantaneousEvent />
		} else if (this.state.type == "durational") {
			return <DurationalEvent />
		} else {
			return <Button title="event type not found" disabled={true} buttonStyle={styles.button} />
		}
	}
}

class InstantaneousEvent extends Component {
	render() {
		return (
			<Button title="instantaneous" buttonStyle={styles.button} />
		)
	}
}

class DurationalEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			style: styles.buttonActive
		}
	}

	handlePress = () => {
		this.setState({active: !this.state.active});
	}

	render() {
		return (
			<Button title="durational" buttonStyle={[styles.button, this.state.active && this.state.style]} onPress={this.handlePress} />
		)
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#282828',
		borderRadius: 100,
		padding: 5,
		overflow: 'hidden',
		height: 40,
		width: 100,
	},
	buttonActive: {
		backgroundColor: 'red',
	}
});