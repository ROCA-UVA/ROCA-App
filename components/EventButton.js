import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
			return <Button 
						titleStyle={{
							color: "white",
							fontSize: 16,
						}}
						title="event type not found" 
						disabled={true} 
						buttonStyle={styles.button} />
		}
	}
}

class InstantaneousEvent extends Component {
	render() {
		return (
			<Button
				titleStyle={{
					color: "white",
					fontSize: 16,
				}}
   				buttonStyle={styles.button}
   				title="instantaneous" />
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
			<Button 
				titleStyle={{
					color: "white",
					fontSize: 13,
				}}
				title="durational" 
				buttonStyle={[styles.button, this.state.active && this.state.style]} 
				onPress={this.handlePress} />
		)
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#FBC02D',
		borderRadius: 100,
		padding: 10,
		overflow: 'hidden',
		width: 120,
		height: 40,
		margin: 11,
	},
	buttonActive: {
		backgroundColor: 'red',
	}
});