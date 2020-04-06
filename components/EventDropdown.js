import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


export default class EventDropdown extends Component {
    constructor(props) {
      super(props);

      this.onChangeText = this.onChangeText.bind(this);

	  this.instructorRef = this.updateRef.bind(this, 'instructor');
	  this.studentRef = this.updateRef.bind(this, 'student');

      this.state = {
		instructor: '',
		student: '',
      };
    }

    onChangeText(text) {
      ['instructor','student']
        .map((name) => ({ name, ref: this[name] }))
        .filter(({ ref }) => ref && ref.isFocused())
        .forEach(({ name, ref }) => {
          this.setState({ [name]: text });
		});

		this.sendData();
    }

    updateRef(name, ref) {
	  this[name] = ref;

	}
	
	//send data to RightSide class
	sendData = () => {
		this.props.parentCallback(this.state);
   }

    render() {

      return (
        <View >   

			<Dropdown
				ref={this.instructorRef}
				onChangeText={this.onChangeText}
				label='Instructor Activity'
				data={InstrActivityData}
				itemCount={5}
				dropdownPosition={0}
			/>
			
			<Dropdown
				ref={this.studentRef}
				onChangeText={this.onChangeText}
				label='Student Activity'
				data={StudActiityData}
				itemCount={3}
			  />
		     
        </View>
      );
    }
  }


  // Instructor Activity list
  const InstrActivityData = [
    { value: 'Lecturing' },
    { value: 'Group Discussion' },
    { value: 'Administrative Task' },
    { value: 'Media' },
    { value: 'Idle' },
  ];

  // Student Activity list
  const StudActiityData = [
    { value: 'Group work' },
    { value: 'Individual work' },
    { value: 'Presentation' },
  ]
