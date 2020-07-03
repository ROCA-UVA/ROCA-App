import React, { Component } from 'react';
import { View, Text,  Image,StyleSheet,Button, Alert} from 'react-native';
import Rectangle from './Rectangle';



export default class ClassroomImage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color1: 'rgba(52, 52, 52, 0.5)',
			buttonText1:'Select 1',
			select1:false,

			color4: 'rgba(52, 52, 52, 0.5)',
			buttonText4:'Select 4',
			select4:false,
		}
	}

	handlePress1 = () => {
		if (!this.state.select1){
			this.setState({color1:'rgba(255, 255, 255, 0.5)',buttonText1:'Unselect 1',select1:true});
		}
		else if (this.state.select1){
		this.setState({color1:'rgba(52, 52, 52, 0.5)',buttonText1:'Select 1',select1:false});
		}
	}

	handlePress4 = () => {
		if (!this.state.select4){
			this.setState({color4:'rgba(255, 255, 255, 0.5)',buttonText4:'Unselect 4',select4:true});
		}
		else if (this.state.select4){
		this.setState({color4:'rgba(52, 52, 52, 0.5)',buttonText4:'Select 4',select4:false});
		}
	}
	render() {
		return (
			<View style={{flex: 5, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center',}}>
				{/* <Text>ClassroomImage Component</Text> */}
				{/* <View style={styles.rectangle1}><Text>1</Text></View>
				<View style={styles.rectangle2}><Text>2</Text></View>
				<View style={styles.rectangle3}><Text>3</Text></View>
				<View style={styles.rectangle4}><Text>4</Text></View>
				<View style={styles.rectangle5}><Text>5</Text></View>
				<View style={styles.rectangle6}><Text>6</Text></View> */}


				{/* <View style={styles.rectangle2}>
							<Text style={styles.buttonText}>Sec 2</Text>
				</View> */}

				<Rectangle height='12%' width='40%' top='27%' left='10%' sectionID='1' color={this.state.color1}  /> 
				<Rectangle height='12%' width='40%' top='27%' left='50%' sectionID='2' color='rgba(52, 52, 52, 0.5)'/> 
				<Rectangle height='20%' width='49%' top='40%' left='1%'  sectionID='3' color='rgba(52, 52, 52, 0.5)'/> 
				<Rectangle height='20%' width='49%' top='40%' left='50%' sectionID='4' color={this.state.color4} /> 
				<Rectangle height='30%' width='49%' top='61%' left='1%'  sectionID='5' color='rgba(52, 52, 52, 0.5)'/> 
				<Rectangle height='30%' width='49%' top='61%' left='50%' sectionID='6' color='rgba(52, 52, 52, 0.5)'/> 

				{/* <View style={[styles.rectangle, 
				{width:'40%',height:'12%',top:'27%',left: '10%',
				backgroundColor: this.state.color}]}
				
                >

                <Text >sec1</Text>
        		</View> */}
				<View style={{flexDirection: 'row'}}>
						<Button
								title={this.state.buttonText1}
								onPress={this.handlePress1}
						/>
						<Button
								title={this.state.buttonText4}
								onPress={this.handlePress4}
						/>
				</View>	
				<Image
					source={
					require(
						'../assets/images/THN-E316.jpg')
					}
				
				/>

			</View>
		);
	}
}


const styles = StyleSheet.create({
	rectangle1: {
	  backgroundColor: 'rgba(52, 52, 52, 0.5)',
	  position: 'absolute', 
	  zIndex: 99,
	},
	rectangle2: {
		height: 200,
		width: 480,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '50%',
		left: '50%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle3: {
		height: 65,
		width: 480,
		backgroundColor: 'rgba(255,255,255,0.6)',
		position: 'absolute', 
		zIndex: 99,
		top: '36%',
		left: '50%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle4: {
		height: 65,
		width: 480,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '36%',
		left: '1%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle5: {
		height: 30,
		width: 350,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '29.8%',
		left: '14.5%',
		borderWidth: 2,
		borderColor: 'white'
	  },
	  rectangle6: {
		height: 30,
		width: 350,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
		position: 'absolute', 
		zIndex: 99,
		top: '29.8%',
		left: '50%',
		borderWidth: 2,
		borderColor: 'white'
	  },
  });