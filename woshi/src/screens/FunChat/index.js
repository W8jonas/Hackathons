import React from 'react'

// assets
import Background from '../../assets/FunChat.png'

// components 

// Functions

import { StyleSheet, Text, Image, Dimensions} from 'react-native'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')


const FunChat = () => {

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


export default FunChat
