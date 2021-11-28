import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import SplashImg from '../../assets/splash.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';
import { ButtonBase } from '../../components/Button';
import { routesPaths } from '../../routes/routesPaths';

export function Auth({navigation}) {
    return (
        <LinearGradient
            colors={baseGradients.linearBlue.colors}
            style={styles.linearContainer}
            start={baseGradients.linearBlue.start}
            end={baseGradients.linearBlue.end}
        >
            <ScrollView style={styles.container}>
                <View
                    style={{
                        height: 400,
                        width: 400,
                        borderRadius: 400,
                        alignSelf: 'center',
                        alignItems: 'center', 
                        justifyContent: 'center',
                        top: -200,
                        backgroundColor: '#F8F8F8',
                        zIndex: 1,
                        marginBottom: -200,
                    }}
                >
                    <Image source={SplashImg} style={{ height: 142/1.25, width: 242/1.25, position: 'absolute', zIndex: 2, top: 240 }} />
                </View>

                <ResponsiveText style={{color: '#F8F8F8', marginVertical: 20, textAlign: 'center'}} h1 bold>
                    Edukall
                </ResponsiveText>

                <View>
                    <ResponsiveText style={{color: '#F8F8F8', width: '75%', alignSelf: 'center',  textAlign: 'center', backgroundColor: '#FF5C00', borderTopLeftRadius: 50, borderTopRightRadius: 50}} h1 bold>
                        Entrar
                    </ResponsiveText>

                    <View style={{backgroundColor: '#FFF', width: '90%', alignSelf: 'center', borderRadius: 20, height: 300}}>
                        <InputBase  title="E-mail" placeholder="aluno2021@senac.br" />
                        <InputBase  title="Senha" placeholder="******" />

                        <View style={{alignSelf: 'center', width: '80%', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                            <ButtonBase label="Entrar" onPress={() => {navigation.navigate(routesPaths.home)}} />
                        </View>
                    </View>

                </View>

            </ScrollView>
        </LinearGradient>
    )
}

function InputBase({title, placeholder}) {

    return (
        <View>
            <View style={InputBaseStyles.container}>
                <ResponsiveText h4 style={InputBaseStyles.title}>{title}</ResponsiveText>
                <TextInput
                    style={[
                        InputBaseStyles.textInput,
                    ]}
                    editable={false}
                    placeholder={placeholder}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    linearContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
})

const InputBaseStyles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		width: '80%',
		backgroundColor: '#F8f8f8',
		marginTop: 10,
	},
	title: {
		marginLeft: 6,
	},
	textInput: {
		backgroundColor: '#F8f8f8',
		height: 52,
		paddingHorizontal: 19,
		borderRadius: 10,
		borderColor: '#CCC',
		borderWidth: 1,
		elevation: 6,
		borderBottomWidth: 2,
		fontSize: 14,
		marginBottom: 10,
		color: '#353535',
	},
})
