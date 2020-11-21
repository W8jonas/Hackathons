import React from 'react'

// assets

// components 
import { LinearGradient } from 'expo-linear-gradient';

// Functions

import { StyleSheet, Text, View, Dimensions} from 'react-native'
const {width: screenWidth} = Dimensions.get('window')


const Event = ({name, data}) => {

    return (
        <LinearGradient 
            style={style.container}
            colors={['rgba(112, 0, 255, 0.9)', 'rgba(173, 0, 255, 0.7)']}
            start={{ x: 0, y: 0}}
            end={{ x:1, y: 1}}
        >
            <Text style={style.text}>{name}</Text>
            <Text style={[style.text, {fontSize: 15}]}>{data}</Text>
		</LinearGradient>
    )
}


const style = StyleSheet.create({
    container: {
        height: 50, 
        width: screenWidth*0.9,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 5, 
        marginTop: 5
    },
    text: {
        fontSize: 18,
        color: "#FFF"
    }
})


export default Event
