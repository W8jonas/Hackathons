
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
                        
                        <Text>Formas de contato:</Text>
                        <Text></Text>
                        <Text>Email: learnintelligent@gmail.com</Text>
                        <Text></Text>
                        
                        <TouchableOpacity 
                            style={style.button}
                            onPress={props.onCancel}
                        >
                            <Text style={{color: '#FFF'}}>Sair</Text>
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
        width: '70%', 
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: '#888',
        borderWidth: 1.8
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
  