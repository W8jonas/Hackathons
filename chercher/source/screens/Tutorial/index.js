import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import LottieView from 'lottie-react-native';

import { routesPaths } from '../../routes/routesPaths';

import animation from './12796-jumping-treasure-box.json'
import animation1 from './7227-vui-animation.json'

import imgCube from './Group847.png'

export function TutorialScreen({navigation}) {
    useEffect(() => {
    }, [])


    function navigationTo() {
        navigation.navigate(routesPaths.game)
    }

    return (
        <View style={styles.container}>

            <View
                style={{
                    height: 500,
                    width: '85%',
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                    borderRadius: 20,
                    zIndex: 1
                }} 
            >
                <Text style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center',}}>Me ajude a encontrar o tesouro!</Text>

                <Image source={imgCube} style={{ height: 125, width: 137, alignSelf: 'center' }} />

                <Text style={{fontSize: 18, textAlign: 'center', paddingHorizontal: 5}}>
                Viage ao mundo com o nosso cubo mágico e descubra os tesouros escondidos por Vidocq, detetive francês que inspirou Sherlock Holmes. 
                {'\n \n'}
                Eles escondeu relíquias incríveis para que ela ficasse protegida de criminosos maldosos e é você o escolhido para apresentar essas relíquias ao mundo. 
                {'\n \n'}
                Prerado para essa jornada?
                </Text>
            </View>

                <TouchableOpacity 
                    onPress={navigationTo}
                    style={{
                        backgroundColor: '#CE1127', width: 225, alignItems: 'center', justifyContent: 'center', borderRadius: 25, height: 45,  position: 'absolute', bottom: 59, elevation: 4, zIndex: 5
                    }}
                >
                    <Text style={{fontSize: 23, textAlign: 'center', color: 'white'}}>
						Seguir
					</Text>
                </TouchableOpacity>
            
                <LottieView
                    style={{
                        width: '100%',
                        height: '100%',
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: -160,
                        zIndex: 0
                    }}
                    autoPlay loop 
                    source={animation1}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222'
    },
})
