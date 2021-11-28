import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import AvatarPreChallenger from '../../assets/AvatarPreChallenger.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

const {width: screenWidth, } = Dimensions.get('window')

export function PreChallenge({navigation}) {

    const widthImage = 375
    const heightImage = 358
    const proporcao = screenWidth/widthImage

    const [counter, setCounter] = useState(30)

    useEffect(() => {

        if (counter === 0){
            navigation.navigate(routesPaths.challenge)
            return
        }

        setTimeout(() => {
            setCounter((counter) => counter - 1)
        }, 1000);

    }, [counter])

    return (
        <LinearGradient
            colors={baseGradients.linearBlue.colors}
            style={styles.linearContainer}
            start={baseGradients.linearBlue.start}
            end={baseGradients.linearBlue.end}
        >
            <View style={styles.container}>
                <Image source={AvatarPreChallenger} style={{width: screenWidth, height: heightImage*proporcao, resizeMode: 'cover'}} />
                
                <ResponsiveText style={{color: '#F8F8F8', textAlign: 'left', width: '100%', paddingHorizontal: 20}} h4>
                    Seu desafio começará em:
                </ResponsiveText>
                
                <ResponsiveText h1 bold style={{color: '#F8F8F8', textAlign: 'center', width: '100%', paddingHorizontal: 20, fontSize: 60}} >
                    {counter}s
                </ResponsiveText>

                <View style={{flexDirection: 'row', marginBottom: 30, width: '100%', paddingHorizontal: 30}}>
                    <ResponsiveText style={{color: '#FF421D', backgroundColor: '#F8F8F860', borderRadius: 30, textAlign: 'center', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15}} h1 bold>
                        1
                    </ResponsiveText>
                    <ResponsiveText style={{color: '#222', textAlign: 'left', paddingHorizontal: 20}} h4>
                        Procure ouvir a opinião de seus colegas sobre o desafio.
                    </ResponsiveText>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 30, width: '100%', paddingHorizontal: 30}}>
                    <ResponsiveText style={{color: '#FF421D', backgroundColor: '#F8F8F860', borderRadius: 30, textAlign: 'center', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15}} h1 bold>
                        2
                    </ResponsiveText>
                    <ResponsiveText style={{color: '#222', textAlign: 'left', paddingHorizontal: 20}} h4>
                        Ambos os participantes devem chegar a mesma alternativa.
                    </ResponsiveText>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 30, width: '100%', paddingHorizontal: 30}}>
                    <ResponsiveText style={{color: '#FF421D', backgroundColor: '#F8F8F860', borderRadius: 30, textAlign: 'center', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15}} h1 bold>
                        3
                    </ResponsiveText>
                    <ResponsiveText style={{color: '#222', textAlign: 'left', paddingHorizontal: 20}} h4>
                        Ao final você receberá pontos de acordo com o seu desempenho.
                    </ResponsiveText>
                </View>

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
    },
})
