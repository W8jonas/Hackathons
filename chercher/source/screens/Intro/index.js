import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import LottieView from 'lottie-react-native';

import { routesPaths } from '../../routes/routesPaths';

import animation from './12796-jumping-treasure-box.json'
import animation1 from './7227-vui-animation.json'


export function IntroScreen({navigation}) {
    useEffect(() => {
    }, [])


    function navigationTo() {
        navigation.navigate(routesPaths.tutorial)
    }

    return (
        <View style={styles.container}>
            {/* <Image source={chercher} style={{ height: 142/0.6, width: 242/0.6 }} /> */}

            <View
                style={{
                    height: 420,
                    width: '85%',
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                    borderRadius: 20,
                    zIndex: 1
                }} 
            >
                <Text style={{fontSize: 22, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center',}}>Me ajude a encontrar o tesouro!</Text>

                <LottieView
                    style={{
                        width: 120,
                        height: 120,
                        alignSelf: 'center'
                    }}
                    autoPlay loop 
                    source={animation}
                />

                <Text style={{fontSize: 18, textAlign: 'center', paddingHorizontal: 5}}>
                Há tesouros escondidos pelos países francófonos, mas poucos conseguem achar. Afinal, não são todos que sabem que existem mais de 45 países que falam francês. 
                {'\n \n'}
                Seja perspicaz avança para a próxima tela e descubra o segredo desse tesouro.
                </Text>
            </View>


                <TouchableOpacity 
                    onPress={navigationTo}
                    style={{
                        backgroundColor: '#CE1127', width: 225, alignItems: 'center', justifyContent: 'center', borderRadius: 25, height: 45,  position: 'absolute', bottom: 59, elevation: 4, zIndex: 3
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
