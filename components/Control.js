import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ControlButton from './ControlButton';
import CommentForm from './CommentForm';
import SectionButton from './SectionButton';
import IncrementStudent from './IncrementStudent';
import EventButton from './EventButton';

export default class Control extends Component {
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'col', backgroundColor: 'white'}}>
				<View style={{flex: 2, flexDirection: 'row'}}>
					<ControlButton type="Start" />
					<ControlButton type="Reset" />
					<CommentForm/>
				</View>

                <View style={{flexDirection: 'row', flex: 2}}>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <SectionButton/>
                        <IncrementStudent/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <SectionButton/>
                        <IncrementStudent/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <SectionButton/>
                        <IncrementStudent/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <SectionButton/>
                        <IncrementStudent/>
                    </View>
                    <View style={{flexDirection: 'col'}, styles.section}>
                        <SectionButton/>
                        <IncrementStudent/>
                    </View>
                </View>

                <View style={{flexDirection: 'row', flex: 3}}> 
                    <EventButton type="instantaneous"/>
                    <EventButton type="instantaneous"/>
                    <EventButton type="instantaneous"/>
                </View>

				{/* <EventButton type="instantaneous" />
				<EventButton type="instantaneous" />
				<EventButton type="instantaneous" /> */}
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