import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


import Header from './components/Header/index'

import OnlineOffice from './screens/OnlineOffice'
import Profile from './screens/Profile'
import Calendar from './screens/Calendar'
import Teams from './screens/Teams'
import FunChat from './screens/FunChat'
import Statistics from './screens/Statistics'
import Mural from './screens/Mural'


function StackNavigator() {
	return (
		<Stack.Navigator initialRouteName="Quadros" screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#FFF'} }}>
			<Stack.Screen name="Quadros" component={Teams} />
			<Stack.Screen name="Mural" component={Mural} />
		</Stack.Navigator>
	);
}

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
				name="Quadros" 
				component={StackNavigator}
				options={{
					headerShown: true, 
					header: () => <Header/>
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
				name="FunChat" 
				component={FunChat}
				options={{
					headerShown: true, 
					header: () => <Header/>,
				}}
			/>

			<Drawer.Screen 
				name="Estatísticas" 
				component={Statistics}
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
