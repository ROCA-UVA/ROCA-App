import React, { Component,useState } from 'react';
import { View, StyleSheet,Alert } from 'react-native';
import { Button } from 'react-native-elements';


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
			status :"Start",
			showText: true ,
		};
		setInterval(() => {
			if (this.state.status == "Start"){ 
				this.setState(previousState => {
				return { showText: !previousState.showText };
				});
			}
		  },
		  1000 // define blinking time in miliseconds
		);
	}

	handlePress = () => {
    if (this.state.status == "Start"){ //after pressing start
	  this.setState({active: true,
					status:"Stop",
					showText:false});
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
		let stateColor = this.state.showText ? '#22AD1E' : 'transparent';
		return (
			<Button title={this.state.status} style={ {backgroundColor: stateColor, padding:5}}  
											buttonStyle={[styles.button, this.state.active && this.state.style]} onPress={this.handlePress} />
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
			<Button title="Reset" style={ { padding:5}} buttonStyle={styles.button} onPress={this.resetAlert} />
		)
	}
}



const styles = StyleSheet.create({
	button: {
		backgroundColor: 'black',
		borderRadius: 100,

		overflow: 'hidden',
		width:100,
	},
	buttonActive: {
		backgroundColor: 'red',
  	},
	  OvalShapeView: {
		marginTop: 20,
		width: 100,
		height: 100,
		backgroundColor: 'blue',
		borderRadius: 50,
		transform: [
		  {scaleX: 2}
		]
	  },
});