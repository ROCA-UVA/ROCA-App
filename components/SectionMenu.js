import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import { Card, Button, Icon, CheckBox } from 'react-native-elements';

import EventButton from './EventButton';
import { useAppContext } from './Context';
import { getTime } from './Time';


export default function SectionMenu() {
  const [events, setEvents] = useState({})
  const [comment, onChangeComment] = useState("Enter comments")

  const {activity, sections, setSections, setEvent} = useAppContext()

  useEffect(() => {
    async function loadData() {
      try {
        const protocol = await AsyncStorage.getItem('protocol')
        setEvents(JSON.parse(protocol).z_events)
      } catch {
        alert(error)
      }
    }

    loadData()

    return async () => {
      await AsyncStorage.setItem('sections', sections)
    }
  }, [])

  function handleCount(value, index) {
    const newCount = sections[index].count + value

    if (newCount >= 0) {
      let newSections = [...sections]
      newSections[index].count = newCount
      setSections(newSections)
      setEvent('['+getTime()+'] Event: '+newCount+' student(s) [section '+(index+1)+']')
    }
  }

  function handleCheckBox(value, index, section) {
    let newSections = [...sections]
    newSections[index].checked = value
    setSections(newSections)
  }

  function getSectionData(section, index) {
    return [
      <View style={{flexDirection: 'row'}} key={index}>
        <View style={styles.countModule}>
          <Icon name="minus-square-o" type="font-awesome" iconStyle={{color: '#bfbfbf'}} onPress={() => handleCount(-1, index)} />
          <Text style={{width: 40, textAlign: 'center'}}>{section.count}</Text>
          <Icon name="plus-square-o" type="font-awesome" iconStyle={{color: '#bfbfbf'}} onPress={() => handleCount(1, index)} />
        </View>
        <CheckBox 
          title={"Section " + (index+1)} 
          checked={section.checked} 
          onPress={() => handleCheckBox(!section.checked, index, section)}
        />
      </View>
    ]
  }

  function getSectionOptions() {
    return sections.map((section, index) => {
      return getSectionData(section, index)
    })
  }

  function getSelected() {
    let selected = []

    sections.map((section, index) => {
      if (section.checked) {
        selected.push(index+1)
      }
    })

    if (selected.length <= 0) {
      return null
    }

    return selected
  }

  function getEventData(type, event) {
    if (event.dependencies.includes(activity)) {
      return <EventButton type={event.type} title={event.title} feedback={' [section(s) '+getSelected()+']'} key={event.code} />
    }
  }

  function getEventTypes() {
    return Object.keys(events).map((type) => {
      return [
        events[type].map((event) => {
          return getEventData(type, event)
        })
      ]
    })
  }

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 7, flexDirection: 'row', flexWrap: 'wrap', padding: 10, justifyContent: 'center', alignContent: 'center', backgroundColor: '#f2f2f2'}}>
        {getSectionOptions()}
      </View>
      <View style={{flex: 4, flexWrap: 'wrap', padding: 10, justifyContent: 'center', alignContent: 'center', backgroundColor: '#f2f2f2'}}>
        {getEventTypes()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  countModule: {
    flexDirection: 'row', 
    alignItems: 'center', 
    margin: 5,
    marginLeft: 10,
    marginRight: 10, 
    padding: 10, 
    borderWidth: 1, 
    borderRadius: 3, 
    backgroundColor: '#fafafa', 
    borderColor: '#ededed'
  }
})