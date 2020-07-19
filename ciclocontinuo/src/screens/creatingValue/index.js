import React, {useState, useEffect, useRef} from 'react'

//assets
import HandOil from '../../images/handOil'
import Recicle from '../../images/recicle'
import Recicle2 from '../../images/recicle2'
import Tree from '../../images/tree'
import Truck from '../../images/truck'
import { defaultColors } from "../../styles";

//funciots
import { useDispatch, useSelector } from 'react-redux'
import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient'

import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native'

// const colorDegrade = {
//     firtColor1: defaultColors.backPrimaryColor,
//     secondColor1: defaultColors.backSecondaryColor,

//     firtColor2: defaultColors.primaryColor,
//     secondColor2: 'rgba(255, 84, 13, 0.3)',
// }


const colorDegrade = {
    firtColor1: 'rgba(109, 10, 214, 0.5)',
    secondColor1: 'rgba(125, 3, 255, 0.5)',

    firtColor2: 'rgba(255, 57, 13, 0.3)',
    secondColor2: 'rgba(255, 84, 13, 0.3)',
}


const slides = [
	{
		key: '1',
		title: 'Ciclo Contínuo',
		subTitle: 'Consultoria',
		text: 'Entre em contato com parceiros fornecedores de serviços que vão alavancar seus negócios.',
        colors: [colorDegrade.firtColor2, colorDegrade.firtColor1],
        image: <HandOil/>,
        color: '#724'
	},
	{
		key: '2',
		title: 'Ciclo Contínuo',
		subTitle: 'Gerador',
		text: 'Entre em contato com fornecedores de resíduos dos mais diferentes tipos e feche negócio.',
        colors: [colorDegrade.firtColor2, colorDegrade.firtColor1],
        image: <Recicle/>,
        color: '#724'
	},
	{
		key: '3',
		title: 'Ciclo Contínuo',
		subTitle: 'Transportador',
		text: 'Entre em contato com transportadores de resíduos e gerencie suas entregas.',
        colors: [colorDegrade.firtColor1, colorDegrade.secondColor1],
        image: <Truck/>,
        color: '#724'
	},
	{
		key: '4',
		title: 'Ciclo Contínuo',
		subTitle: 'Receptor',
		text: 'Cadastre seu ponto de coleta de resíduos e receba recomendações de fornecedores e transportadores do mercado que estão próximos a você.',
        colors: [colorDegrade.firtColor2, colorDegrade.secondColor2],
        image: <Recicle2/>,
        color: '#724'
	},
	{
		key: '5',
		title: 'Ciclo Contínuo',
		subTitle: 'Cooperativa',
		text: 'Entre em acordo com múltiplos fornecedores de serviços e feche acordos comerciais sem burocracias desnecessárias!',
        colors: [colorDegrade.firtColor2, colorDegrade.secondColor1],
        image: <Tree/>,
        color: '#724'
	}
]

export default function CreatingValue() {
	const dispatch = useDispatch()
    
    _renderItem = ({item, dimensions }) => (
        <View style={styles.image}>
            <LinearGradient
                style={[styles.mainContent, dimensions]}
                colors={item.colors}
                start={{ x: 0, y: 0.1 }}
                end={{ x: 0.1, y: 1 }}
            >
                <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around', marginBottom: 100}}>
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.subTitle}>{item.subTitle}</Text>
                    <View style={[
                            {height: 220, width: 220, backgroundColor: 'rgba(0,0,0,0.1)', borderWidth: 5}, 
                            {borderColor: item.color}, 
                            styles.flexCenter
                        ]}>

                        <View style={[
                                {height: 200, width: 200}, 
                                {backgroundColor: item.color}, 
                                styles.flexCenter
                            ]}>
                            {item.image}
                        </View>
                    </View>

                    <Text style={styles.text}>{item.text}</Text>
                </View>

            </LinearGradient>
        </View>
    )

    function _renderNextButton() {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{color: 'black'}}>Continuar</Text>
            </View>
        )
      }

    function _renderDoneButton() {
        return (
            <View style={styles.buttonCircle}>
                <Text style={{color: 'black'}}>Pronto</Text>
            </View>
        )
    }
    
	function _onDone() {
		dispatch({type: 'APP_VALUE_SHOW', payload: true})
    }

    return (
        <AppIntroSlider 
            renderItem={_renderItem} 
            slides={slides} 
            onDone={_onDone}
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
            bottomButton={true}
            showDoneButton={true}
            showNextButton={true}
        />
    )
}


const styles = StyleSheet.create({
    flexCenter : {
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 200
    },
    mainContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
    },
    image: {
        flex: 1,
    },
    text: {
		color: 'rgba(255, 255, 255, 0.8)',
		backgroundColor: 'transparent',
		textAlign: 'center',
        paddingHorizontal: 30,
        fontSize: 17
    },
    subTitle: {
		color: 'rgba(255, 255, 255, 0.8)',
		backgroundColor: 'transparent',
		textAlign: 'center',
        paddingHorizontal: 16,
        fontSize: 19,
        marginBottom: -60
    },
    title: {
		fontSize: 22,
		color: 'white',
		backgroundColor: 'transparent',
		textAlign: 'center',
    },
    buttonCircle: {
        flex:1,
        width: '74%',
        height: 45,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 22
    },
})
