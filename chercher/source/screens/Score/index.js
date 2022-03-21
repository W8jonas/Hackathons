import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'

// Modules

// Assets
// import SplashImg from '../../assets/splash.png'
import pontuacao from './pontuacao.png'

// Functions

// Components
import { routesPaths } from '../../routes/routesPaths';

export function Score() {

    return (
        <ImageBackground style={styles.container} source={pontuacao}>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginTop: 20,
    },
})
