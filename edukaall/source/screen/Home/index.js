import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import Play from '../../assets/Play.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

export function Home({navigation}) {
    return (
        <LinearGradient
            colors={baseGradients.linearBlue2.colors}
            style={styles.linearContainer}
            start={baseGradients.linearBlue2.start}
            end={baseGradients.linearBlue2.end}
        >
            <View style={styles.container}>
                <View style={{height: 50, }} />

                <ResponsiveText style={{color: '#F8F8F8', marginVertical: 10}} h1>
                    Bem-vindo
                </ResponsiveText>

                <ResponsiveText style={{color: '#F8F8F8', marginVertical: 10}} h4>
                    Próximo desafio:{'\n'}28/11, 19:00
                </ResponsiveText>

                <View style={{height: 40, width: 120, borderRadius: 12, marginVertical: 20, backgroundColor: '#F8F8F840', justifyContent: 'center', alignItems: 'center'}}>
                    <ResponsiveText h5 bold style={{color: '#FFF'}}>
                        3541 Eduks
                    </ResponsiveText>
                </View>

                <ResponsiveText style={{color: '#F8F8F8', marginVertical: 10, textAlign: 'center'}} h4>
                    Para testar coloque o código: 0000
                </ResponsiveText>

                <TextInput
                    style={{width: '80%', backgroundColor: '#F8F8F820', alignSelf: 'center', fontSize: 22, textAlign: 'center', borderRadius: 8, color: '#FFF', padding: 10}}
                    placeholderTextColor="#f8f8f8"
                    placeholder="Insira o seu código aqui."
                    keyboardType={'numeric'}
                />
                <TouchableOpacity 
                    style={{position: 'absolute', bottom: 10, alignSelf: 'center'}} 
                    activeOpacity={0.5} 
                    onPress={() => navigation.navigate(routesPaths.preChallenge)}
                >
                    <Image source={Play} style={{ height: 200, width: 200 }} />
                </TouchableOpacity>
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
        paddingHorizontal: 10,
    },
})
