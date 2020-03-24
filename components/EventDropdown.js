import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


export default class EventDropdown extends Component {
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
		if (this.state.type == "Instructor") {
			return <InstrActivity />
        } 
        else if  (this.state.type == "Student") {
			return <StudActivity/>
        }
        else{
            return <Text>Wrong type</Text>
        }
	}
}

class InstrActivity extends Component {
	render() {  
	  return (
		<Dropdown
		  label='Instructor Activity'
		  data={InstrActivityData}
          itemCount={5}
          dropdownPosition={0}
		/>
	  );
	}
  }

  class StudActivity extends Component {
	render() {
	  return (
		<Dropdown
		  label='Student Activity'
		  data={StudActiityData}
		  itemCount={3}
		/>
	  );
	}
  }

  const InstrActivityData = [
    { value: 'Lecturing' },
    { value: 'Group Discussion' },
    { value: 'Administrative Task' },
    { value: 'Media' },
    { value: 'Idle' },
  ];

  const StudActiityData = [
    { value: 'Group work' },
    { value: 'Individual work' },
    { value: 'Presentation' },
  ]