import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'

// Assets
import check from '../../assets/check.json'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style'
import { ButtonBase } from '../../components/Button'
import { routesPaths } from '../../routes/routesPaths'

export function Score({navigation, route}) {
    const {totalCorrectAnswers} = route.params

    return (
        <LinearGradient
            colors={baseGradients.linearBlue.colors}
            style={styles.linearContainer}
            start={baseGradients.linearBlue.start}
            end={baseGradients.linearBlue.end}
        >
            <View style={styles.container}>
                <ResponsiveText style={{color: '#F8F8F8', textAlign: 'center'}} h2>
                    Parabéns Victor!{'\n'}
                    Sua equipe recebeu:
                </ResponsiveText>

                <ResponsiveText style={{color: '#F8F8F8', textAlign: 'center', paddingTop: 10, marginBottom: -50}} bold h1>
                    + 27 Eduks{'\n'}
                    + {totalCorrectAnswers} pts
                </ResponsiveText>

                <LottieView
                    style={{
                        width: 400,
                        height: 400,
                    }}
                    source={check}
                    autoPlay
                    loop={false}
                />

                <ButtonBase label={'Acompanhar ranking do curso'} onPress={() => {navigation.navigate(routesPaths.ranking)}} />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
