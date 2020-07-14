import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
// import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import CheckBox from 'react-native-check-box';

// export default class SectionButton extends Component {
// 	state = { checked: false };
// 	onToggle = checked => this.setState({ checked });

// 	render() {
// 		const { checked } = this.state;
// 		return (
// 			<View style={{flex: 1, flexDirection: 'col'}}>
// 				<CircleCheckBox
//                     checked={checked}
//                     outerColor={'#FBC02D'}
//                     innerColor={'#FBC02D'}
//                     onToggle={this.onToggle}
//                     labelPosition={LABEL_POSITION.LEFT}
//                     label="S1"
// 				/>
// 			</View>
// 		);
// 	}
// }

export default class SectionButton extends Component {
	state = { checked: false };
	onToggle = checked => this.setState({ checked });

	render() {
		<CheckBox
			onClick={()=>{
			this.setState({
				isChecked:!this.state.isChecked
			})
			}}
			isChecked={this.state.isChecked}
		/>
		const { checked } = this.state;
		return (
			<View style={{flexDirection: 'row'}}>
				<CheckBox
					style={{ flex: 1, paddingLeft: 45}}
					onClick={()=>{
					this.setState({
						isChecked:!this.state.isChecked
					})
					}}
					isChecked={this.state.isChecked}
					rightText={'S1'}
					checkBoxColor={'gray'}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});