import React from 'react'

// assets
import Background from '../../assets/Estatisticas.png'

// components 

// Functions

import { StyleSheet, Text, Image, Dimensions} from 'react-native'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')


const Statistics = () => {

    return (
        <Image 
            style={style.container} 
            resizeMode={"contain"} 
            source={Background}
        />
    )
}


const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFF",
        width: screenWidth,
        height: screenHeight
    },
})


export default Statistics
