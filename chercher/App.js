import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Routes } from './source/routes';


export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="dark" />
			<Routes />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
