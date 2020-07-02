import React, { Component } from 'react';
import { View , Text} from 'react-native';
import EventButton from './EventButton';
import EventDropdown from './EventDropdown';



export default class RightSide extends Component {

	state = { 
		Activity: '',
	}
	
	callbackFunction = (childData) => {
		this.setState({Activity: childData})
		console.log({Activity: childData})
	}

	render(){
		return (
			
			<View style={{flex: 2, backgroundColor: 'lightblue', padding:10}}>
				<View style={{flex: 1}}>


					<EventDropdown parentCallback = {this.callbackFunction}/>

					<EventButton type="instantaneous" />
					<EventButton type="durational" />
					<EventButton type="bar" />

				</View>
				<Text>{this.state.Activity.instructor} </Text>
				<Text>{this.state.Activity.student} </Text>
			</View>
		);
	}
}
