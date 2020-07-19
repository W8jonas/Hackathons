

// componente
{

import React, {useState, useEffect} from 'react'
// Assets
import IMG_TESTE from "../../teste.jpg"

//Components

// Fuctions
import { translate } from '../../locales/index'
import { useSelector, useDispatch } from 'react-redux'

import { RealTimeDatabaseSet } from "../../functions/firebase"


import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, Button } from 'react-native'


export default function Tasks(props) {

	return (
	<View style={[style.container, {borderTopColor: props.color}]}>

		<View style={{justifyContent: 'center', alignItems: 'center', width: '15%'}}>
			<Image source={IMG_TESTE} style={{width: 30, height: 30}}/>
		</View>

		<View style={{flex:1, marginBottom: 10}}>

			<Text style={style.title}>{props.name}</Text>
			
			<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20}}>
				<Text style={style.text}>Não tipado ainda</Text>
				<Text style={style.text}>{props.score} pontos</Text>
			</View>

		</View>

	</View>
	)
}
	
const style = StyleSheet.create({
	container: {
		flex:1,
		borderTopWidth: 3,
		flexDirection: 'row',
		borderWidth: 0.5,
		maxHeight: 70,
	},
	title: {
		fontSize: 20,
		marginLeft: 10
	},
	text:{
		fontSize: 16,
		color: '#999',
	}
})
	
}
// tela
{

import React, {useState, useEffect} from 'react'
// Assets
import IMG_TESTE from "../../teste.jpg"

//Components

// Fuctions
import { translate } from '../../locales/index'
import { useSelector, useDispatch } from 'react-redux'

import { RealTimeDatabaseSet } from "../../functions/firebase"


import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, Button } from 'react-native'

export default function inputComp({navigation}) {

  return (
	<View style={style.container}>
          
		<Text style={style.title}>Disciplinas</Text>

		<View style={{flex:1}}>
			
		</View>
          
	</View>
  )
}
  
const style = StyleSheet.create({
	container:{
		flex:1
	},
	buttonContainer: {
		flex:1,
		flexDirection: 'row',
		borderWidth: 0.5,
		height: 70,
	},
	imageContainer: {
		justifyContent: 'center', 
		alignItems: 'center',
		width: '15%'
	},
	title: {
		fontSize: 30,
		alignSelf: 'center',
		marginTop: 5,
		marginBottom: 5,
	},
	textButton: {
		color: '#999',
		fontSize: 15,
		alignSelf: 'center', 
	}
})
  
}

// modal
{

import React, {useState, useEffect} from 'react'
// Assets
import IMG_TESTE from "../../teste.jpg"

//Components

// Fuctions
import { translate } from '../../locales/index'
import { useSelector, useDispatch } from 'react-redux'

import { RealTimeDatabaseSet } from "../../functions/firebase"

import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, Button, Modal } from 'react-native'


export default function CompleteStudyModal(props) {

  return (
    <Modal
        onRequestClose={props.onCancel}
        visible={props.isVisible}
        animationType='slide' transparent={true}
    >
        <TouchableOpacity 
            style={style.invisibleContainer}
            onPress={props.onCancel}
            activeOpacity={1}
        >
        </TouchableOpacity>
          
            <View style={{alignItems: 'center'}}>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}> 
                    <View style={{flex:1}}>
                        <TouchableOpacity 
                            style={style.invisibleContainer}
                            onPress={props.onCancel}
                            activeOpacity={1}
                        >
                        </TouchableOpacity>
                    </View>
                
                    <View style={style.container}>
                        
                        <Text>MODAL</Text>
                        <Text>MODAL</Text>
                        <Text>MODAL</Text>
                        
                        <TouchableOpacity 
                            style={style.button}
                        >
                            <Text>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                
                    <View style={{flex:1}}>
                        <TouchableOpacity 
                            style={style.invisibleContainer}
                            onPress={props.onCancel}
                            activeOpacity={1}
                        >
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    
        <TouchableOpacity 
            style={style.invisibleContainer}
            onPress={props.onCancel}
            activeOpacity={1}
        >
        </TouchableOpacity>
    </Modal>
  )
}

const style = StyleSheet.create({
    invisibleContainer: {
        flex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    container: {
        width: '50%', 
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: '#888',
        borderWidth: 1.8
    },
    input: {
        backgroundColor: '#ddd', 
        width: '90%', 
        marginBottom: 5, 
        marginTop: 10
    },
    button: {
        backgroundColor: '#f80', 
        borderRadius: 10,
        width: '50%',
        padding: 10, 
        alignItems: 'center', 
        marginBottom: 10,
        marginTop: 5
    },
})
  
}
