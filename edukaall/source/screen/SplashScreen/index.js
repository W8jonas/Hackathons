import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import SplashImg from '../../assets/splash.png'
import Edukall from '../../assets/edukall.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

export function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(routesPaths.auth)
        }, 1000);
    }, [])

    return (
        <View style={styles.container}>
            <Image source={SplashImg} style={{ height: 142/1.1, width: 242/1.1 }} />

            <Image source={Edukall} style={{ height: 3240/50, width: 5760/50, position: 'absolute', left: 10, bottom: 10 }} />

            <View
                style={{
                    height: 130,
                    width: 130,
                    borderRadius: 130,
                    position: 'absolute',
                    top: -50,
                    left: -50,
                    backgroundColor: '#003466'
                }} 
            />

            <View
                style={{
                    height: 130,
                    width: 130,
                    borderRadius: 130,
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    backgroundColor: '#003466'
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
