import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

const {height, width} = Dimensions.get('window')


const WarningEvent = () => {
    return (
        <LinearGradient
            colors={['#00F300', '#009C00']}
            style={style.container}
        >
            <Text style={{color: "#FFF", fontWeight: 'bold', fontSize: 18}}>      
				Hoje é o aniversário do Lucas, parabéns!! 🎉
            </Text>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container: {
        width: width,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -15,
        marginTop: 15,
        elevation: 5,
        // backgroundColor: '#00F300'
    }
})

export default WarningEvent