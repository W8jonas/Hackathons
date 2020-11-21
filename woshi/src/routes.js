import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
import { Button, Text, View } from 'react-native'


// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       </View>
//     );
// }

// function NotificationsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//         </View>
//     );
// }

import OnlineOffice from './screens/OnlineOffice'
import Profile from './screens/Profile'
import Header from './components/Header/index'

export default function App() {
    return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
			<Drawer.Screen 
				name="Escritório" 
				component={OnlineOffice}
				options={{
					headerShown: true, 
					header: () => <Header/>
				}}
			/>

			<Drawer.Screen 
				name="Perfil" 
				component={Profile}
				options={{
					headerShown: true, 
					header: () => <Header/>
				}}
			/>
			
			</Drawer.Navigator>
		</NavigationContainer>
    );
}
