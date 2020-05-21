import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class EventButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			title: ''
		}
	}

	componentDidMount = () => {
		this.setState({type: this.props.type, title: this.props.title})
	}

	render() {
		if (this.state.type == "instantaneous") {
			return <InstantaneousEvent title={this.state.title} />
		} else if (this.state.type == "durational") {
			return <DurationalEvent title={this.state.title} />
		} else {
			return <Button title="event type not found" disabled={true} buttonStyle={styles.button} />
		}
	}
}

class InstantaneousEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title || 'instantaneous'
		}
	}

	render() {
		return (
			<Button title={this.state.title} buttonStyle={styles.button} />
		)
	}
}

class DurationalEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			style: styles.buttonActive,
			title: props.title || 'durartional'
		}
	}

	handlePress = () => {
		this.setState({active: !this.state.active});
	}

	render() {
		return (
			<Button title={this.state.title} buttonStyle={[styles.button, this.state.active && this.state.style]} onPress={this.handlePress} />
		)
	}
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