import React, { Component } from 'react';
import { TextInput, StyleSheet,View,Text,Button} from 'react-native';

export default class Rectangle extends Component {
    constructor(props) {
		super(props);
		this.state = {
            height: 0,
            width:0,
            top:0,
            left:0,
            sectionID:0,
            color:''
		}
	}

	componentDidMount = () => {
        this.setState({
            height: this.props.height, 
            width:this.props.width,
            top:this.props.top,
            left:this.props.left,
            sectionID:this.props.sectionID,
            color:this.props.color})
	}

	render() {
		return (     
                        
        <View style={[styles.rectangle,
                {width:this.props.width,
                height:this.props.height,
                top:this.props.top,
                left: this.props.left,
                backgroundColor: this.props.color}]}
                >

                <Text style={styles.sectionText}>{this.props.sectionID}</Text>
        </View>
		);
	}
}

const styles = StyleSheet.create({
	rectangle: {
	  position: 'absolute', 
	  zIndex: 99,
	  borderWidth: 2,
      borderColor: 'white'
    },

    sectionText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
      },
})
