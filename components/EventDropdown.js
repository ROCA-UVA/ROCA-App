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

    }

    updateRef(name, ref) {
	  this[name] = ref;
    }

    render() {
	  let {instructor} = this.state;
	  let {student} = this.state;


      return (
        <View >
          <View>

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

          <View style={[styles.container, styles.textContainer]}>
            <Text>{instructor}</Text>
          </View>

          <View style={[styles.container, styles.textContainer]}>
            <Text>{student}</Text>
          </View>

        </View>
      );
    }
  }



const styles = {
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },


  textContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 16,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },



};

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
