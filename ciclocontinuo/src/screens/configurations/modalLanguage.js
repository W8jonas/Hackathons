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

    const dispatch = useDispatch()

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
                        
                        <Text>Selecione a sua linguagem:</Text>

                        <TouchableOpacity  onPress={()=>dispatch({type: 'CHANGE_LANG', payload: 'pt_BR'}), props.onCancel}>
                            <Text style={style.subTitle}>Português Brasil</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            onPress={props.onCancel}
                            style={style.button}
                        >
                            <Text style={style.text}>Sair</Text>
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
    text: {
        color: '#FFF', 
        fontSize: 18
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
  