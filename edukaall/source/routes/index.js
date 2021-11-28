import React from 'react'
import { LogBox } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading'
import { useFonts, Roboto_400Regular, Roboto_700Bold,  } from '@expo-google-fonts/roboto'

import { Challenge } from '../screen/Challenge'
import { Auth } from '../screen/Auth'
import { Home } from '../screen/Home'
import { PreChallenge } from '../screen/PreChallenge'
import { Ranking } from '../screen/Ranking'
import { Bonus } from '../screen/Bonus'
import { routesPaths } from './routesPaths'
import { SplashScreen } from '../screen/SplashScreen'
import { Score } from '../screen/Score'


LogBox.ignoreLogs(['Setting a timer for a long period'])
LogBox.ignoreLogs(['Warning: `flexWrap: `wrap`` is not supported with the `VirtualizedList`'])

const Stack = createStackNavigator()

export function Routes() {
    const [fontsLoaded] = useFonts({
		Roboto_400Regular, 
        Roboto_700Bold,
	})

    if (!fontsLoaded) {
		return <AppLoading />
	}

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={routesPaths.splash} component={SplashScreen} />
                <Stack.Screen name={routesPaths.auth} component={Auth} />
                <Stack.Screen name={routesPaths.home} component={Home} />
                <Stack.Screen name={routesPaths.preChallenge} component={PreChallenge} />
                <Stack.Screen name={routesPaths.challenge} component={Challenge} />
                <Stack.Screen name={routesPaths.score} component={Score} />
                <Stack.Screen name={routesPaths.ranking} component={Ranking} />
                <Stack.Screen name={routesPaths.bonus} component={Bonus} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
