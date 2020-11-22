import React, {useState, useEffect} from 'react'

// Assets
import Acenar from "../../../assets/icons/acenar.png"
import Close from "../../../assets/icons/close.png"

// Components
import { RectButton } from 'react-native-gesture-handler'

// Functions

import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native'


export default function ModalAceno(props) {

  return (
    <Modal
        onRequestClose={props.onCancel}
        visible={props.isVisible}
        animationType='slide' transparent={true}
    >
        <TouchableOpacity 
            style={styles.invisibleContainer}
            onPress={props.onCancel}
            activeOpacity={1}
        >
        </TouchableOpacity>
          
            <View style={{alignItems: 'center'}}>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}> 
                    <View style={{flex:1}}>
                        <TouchableOpacity 
                            style={styles.invisibleContainer}
                            onPress={props.onCancel}
                            activeOpacity={1}
                        >
                        </TouchableOpacity>
                    </View>
                
                    <View style={styles.container}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, marginTop: 20}}>
                            <View style={{height: 4}}>
                            </View>

                            <Text style={{paddingHorizontal: 70, textAlign: 'center', fontSize: 18, color: "#3A3A3A"}}>
                                Roberto Marinho está acenando para você
                            </Text>
                            
                            <TouchableOpacity onPress={props.onCancel}>
                                <Image source={Close} resizeMode={"contain"} style={{width: 25, height: 40}} />
                            </TouchableOpacity>
                        </View>

                        <Image source={Acenar} resizeMode={"contain"} style={{width: 60, height: 60, marginTop: 10, marginBottom: 10}} />

                        <Text style={{color: "#3A3A3A", fontSize: 16, marginBottom: 40}}>
                            “Vamos conversar na sala 2.”
                        </Text>
                    </View>
                
                    <View style={{flex:1}}>
                        <TouchableOpacity 
                            style={styles.invisibleContainer}
                            onPress={props.onCancel}
                            activeOpacity={1}
                        >
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    
        <TouchableOpacity 
            style={styles.invisibleContainer}
            onPress={props.onCancel}
            activeOpacity={1}
        >
        </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
    invisibleContainer: {
        flex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    container: {
        width: '90%', 
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 0.3, 
        elevation: 10,
        borderRadius: 10
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
  