import { AsyncStorage } from 'react-native';

const protocol  = require('../assets/database.json');

var activity = 0;

try {
	AsyncStorage.setItem('protocol', JSON.stringify(protocol))
	AsyncStorage.setItem('activity', JSON.stringify(activity))
} catch (error) {
	alert(error)
}