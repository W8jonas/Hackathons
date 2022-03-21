import React, {useState, useEffect} from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading'

import { SplashScreen } from '../screens/SplashScreen'
import { IntroScreen } from '../screens/Intro'
import { TutorialScreen } from '../screens/Tutorial'
// import { MapCountry } from '../screens/MapCountry'
import { Game } from '../screens/Game'
import { Score } from '../screens/Score'

import { routesPaths } from './routesPaths'

const Stack = createStackNavigator()

export function Routes() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 800);
    }, [])

    if (!loading) {
		return <AppLoading />
	}

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={routesPaths.splash} component={SplashScreen} />
                <Stack.Screen name={routesPaths.intro} component={IntroScreen} />
                <Stack.Screen name={routesPaths.tutorial} component={TutorialScreen} />
                {/* <Stack.Screen name={routesPaths.mapCountry} component={MapCountry} /> */}
                <Stack.Screen name={routesPaths.game} component={Game} />
                <Stack.Screen name={routesPaths.score} component={Score} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
