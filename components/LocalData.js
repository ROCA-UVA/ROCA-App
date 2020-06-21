import { AsyncStorage } from 'react-native';

const protocol  = require('../assets/database.json');

var activity = 1;

try {
	AsyncStorage.setItem('protocol', JSON.stringify(protocol))
	AsyncStorage.setItem('activity', JSON.stringify(activity))
	AsyncStorage.setItem('classroom', JSON.stringify({name: 'none selected', uri: {}}))
} catch (error) {
	alert(error)
}