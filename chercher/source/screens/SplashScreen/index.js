import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

// Modules

// Assets
// import SplashImg from '../../assets/splash.png'
import chercher from './chercher-logo.jpeg'

// Functions

// Components
import { routesPaths } from '../../routes/routesPaths';

export function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(routesPaths.intro)
        }, 1000);
    }, [])

    return (
        <View style={styles.container}>
            <Image source={chercher} style={{ height: 142/0.6, width: 242/0.6 }} />

            {/* <Image source={chercher} style={{ height: 3240/50, width: 5760/50, position: 'absolute', left: 10, bottom: 10 }} /> */}

            <View
                style={{
                    height: 130,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    backgroundColor: '#102D8B'
                }} 
            />

            <View
                style={{
                    height: 130,
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#C1272D'
                }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
})
