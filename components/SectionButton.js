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

	
	constructor(props) {
		super(props);
		this.state = {
			sectionID: ''
		}
	}

	
	componentDidMount = () => {
		this.setState({sectionID: this.props.sectionID})
	}

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
			<View style={{flexDirection: 'row',alignItems:'center'}}>
				<CheckBox
					style = {styles.checkbox}
					onClick={()=>{
					this.setState({
						isChecked:!this.state.isChecked
					})
					}}
					isChecked={this.state.isChecked}
					// rightText={"Sec " + this.state.sectionID}
					checkBoxColor={'gray'}
					
					
				/>
				<Text> {"Sec " + this.state.sectionID}</Text>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	checkbox: {
		alignSelf: "center",
		transform: [
			{scaleX: 2},
			{scaleY: 2}
		  ],
		padding:10
	  },
});