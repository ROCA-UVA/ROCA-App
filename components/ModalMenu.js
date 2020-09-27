import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, SectionList, AsyncStorage } from 'react-native';
import { Overlay, Divider } from 'react-native-elements';

export default function ModalMenu(props) {
	const [label, setLabel] = useState("")
	const [style, setStyle] = useState({})
	const [modalHeading, setModalHeading] = useState("")
	const [modalItem, setModalItem] = useState([])
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		setLabel(props.label)
		setStyle(props.style)
		setModalHeading(props.modalHeading)
		setModalItem(props.modalItem)
	})

	function handleSelect(item) {
		props.onPress(item)
		setShowModal(false)
	}

	return (
		<View>
			<TouchableOpacity onPress={() => setShowModal(!showModal)}>
				<Text style={style}>{label}</Text>
			</TouchableOpacity>
			<Overlay 
				overlayStyle={styles.modalOverlay} 
				isVisible={showModal} 
				onBackdropPress={() => setShowModal(!showModal)}
			>
				<View>
					<Text style={styles.modalHeading}>{modalHeading}</Text>
					<SectionList
						sections={modalItem}
						keyExtractor={(item, index) => item + index}
						renderItem={({ item }) => (
							<View>
								<TouchableOpacity onPress={() => handleSelect(item)}>
									<Text style={styles.modalSubitem}>{item.title}</Text>
								</TouchableOpacity>
								<Divider />
							</View>
						)}
						renderSectionHeader={({ section: { title } }) => (
							<Text style={styles.modalItem}>{title}</Text>
						)}
					/>
				</View>
			</Overlay>
		</View>
	)
}

const styles = StyleSheet.create({
	modalOverlay: {
		maxHeight: '50%',
	},
	modalHeading: {
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
	},
	modalItem: {
		textAlign: 'center',
		fontSize: 30,
		padding: 10,
		backgroundColor: "lightgray",
	},
	modalSubitem: {
		textAlign: 'center',
		fontSize: 25,
		padding: 10,
	}
});
