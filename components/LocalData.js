import { AsyncStorage } from 'react-native';

const protocol  = require('../assets/database.json');

try {
	AsyncStorage.setItem('protocol', JSON.stringify(protocol))
	AsyncStorage.setItem('classroom', JSON.stringify({title: 'none selected', uri: {}, sections: []}))
	AsyncStorage.setItem('sections', JSON.stringify([{count: 0, checked: false}, 
													 {count: 0, checked: false}, 
													 {count: 0, checked: false}, 
													 {count: 0, checked: false}, 
													 {count: 0, checked: false}, 
													 {count: 0, checked: false}]))
} catch (error) {
	alert(error)
}