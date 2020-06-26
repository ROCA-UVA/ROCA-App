import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  

export default class SectionForm extends Component {
	state = { checked: false };
	onToggle = checked => this.setState({ checked });

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
                    label="S1"
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({

});