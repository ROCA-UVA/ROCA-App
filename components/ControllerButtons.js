import React, { Component,useState } from 'react';
import { View, StyleSheet,Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

export default class ControllerButtons extends Component {
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
		if (this.state.type == "Start") {
			return <StartEvent />
		} else if (this.state.type == "Reset") {
			return <ResetEvent />
		} else {
			return <Button title="Invalid" disabled={true} buttonStyle={styles.button} />
		}
	}
}

class StartEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
      style: styles.buttonActive,
      status :"Start"
		}
	}

	handlePress = () => {
    if (this.state.status == "Start"){ //after pressing start
      this.setState({active: true});
      this.setState({status: "Stop"});
    }
    else if (this.state.status == "Stop"){ // After pressing stop
      Alert.alert(
        "Are you Sure",
        "Stop the session",
        [
          {
            text: "Cancel", // cancel stop
            onPress: () => {
                console.log("Cancel Pressed");
                }
            
          },
          {
            text: "Stop", // confirm stop
            onPress: () => {
                console.log("Stop Pressed");
                this.setState({active: false});
                this.setState({status: "Start"});
                }
            
          },
        ],
        { cancelable: false }
      );
    }
	}

	render() {

		return (
			<Button title={this.state.status} buttonStyle={[styles.button, this.state.active && this.state.style]} onPress={this.handlePress} />
		)
	}
}


class ResetEvent extends Component {

  resetAlert = () =>
  Alert.alert(
    "Are you Sure",
    "Reset all data",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Reset", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

	render() {
		return (
			<Button title="Reset" buttonStyle={styles.button} onPress={this.resetAlert} />
		)
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'black',
		borderRadius: 100,
		padding: 10,
		overflow: 'hidden',
		width: 100,
		margin: '.5em',
	},
	buttonActive: {
		backgroundColor: 'red',
  },
  startActive: {
		backgroundColor: 'red',
	}
});