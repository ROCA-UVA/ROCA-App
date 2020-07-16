import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ControlButton from './ControlButton';
import CommentForm from './CommentForm';
import SectionButton from './SectionButton';
import IncrementStudent from './IncrementStudent';
import SectionEventButton from './SectionEventButton';

export default class Control extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'col', backgroundColor: 'white',justifyContent: 'space-around',alignItems:'center'}}>
				<View style={{ flexDirection: 'row',flex:2}}>
					<ControlButton type="Start" />
					<ControlButton type="Reset" />
					<CommentForm/>
				</View>

                <View style={{flexDirection: 'row',flex:2}}>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <IncrementStudent/>
                        <SectionButton sectionID='1'/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <IncrementStudent/>
                        <SectionButton sectionID='2'/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <IncrementStudent/>
                        <SectionButton sectionID='3'/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <IncrementStudent/>
                        <SectionButton sectionID='4'/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <IncrementStudent/>
                        <SectionButton sectionID='5'/>
                    </View>
                </View>

                <View style={{flexDirection: 'row',flex:2}}> 
                    <SectionEventButton title="Ask Question"/>
                    <SectionEventButton title="Responds to Instructor" />
                    <SectionEventButton title="Makes a Prediction" />
                    <SectionEventButton title="Responds to Student" />
                </View>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
    button:{
        
    },
    section:{
        flex: 2,
        alignItems: 'center'
    }
});