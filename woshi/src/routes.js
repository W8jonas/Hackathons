import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import Header from './components/Header/index'

import OnlineOffice from './screens/OnlineOffice'
import Profile from './screens/Profile'
import Calendar from './screens/Calendar'


export default function App() {
    return (
		<NavigationContainer>
			<Drawer.Navigator 
				initialRouteName="Home" 
				screenOptions={{
					headerShown: false,
				}}
			>

			<Drawer.Screen 
				name="Escritório" 
				component={OnlineOffice}
				options={{
					headerShown: true, 
					header: () => <Header/>,
				}}
			/>

			<Drawer.Screen 
				name="Calendário" 
				component={Calendar}
				options={{
					headerShown: true, 
					header: () => <Header/>,
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
