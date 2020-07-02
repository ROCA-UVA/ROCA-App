import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

export default class SectionForm extends Component {

	state = { checked: false};

	constructor(props) {
		super(props);
		this.state = {
			sectionID: ''
		}
	}

	componentDidMount = () => {
		this.setState({sectionID: this.props.sectionID})
	}

	onToggle = checked => {
		console.log("Check " + this.state.sectionID);
		this.setState({ checked });
		this.sendData();}

	sendData = () => {
		this.props.parentCallback(this.state);
	}
	
	render() {
		const { checked } = this.state;
		
		return (
			<View style={{flex: 1, flexDirection: 'col', backgroundColor: 'pink'}}>
				<CircleCheckBox
				checked={checked}
				outerColor={'#282828'}
				innerColor={'#282828'}
				onToggle={this.onToggle}
				labelPosition={LABEL_POSITION.LEFT}
				label={"Sec " + this.state.sectionID}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});
