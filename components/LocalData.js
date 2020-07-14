import { AsyncStorage } from 'react-native';

const protocol  = require('../assets/database.json');

try {
	AsyncStorage.setItem('protocol', JSON.stringify(protocol))
	AsyncStorage.setItem('classroom', JSON.stringify({name: 'none selected', uri: {}}))
} catch (error) {
	alert(error)
}