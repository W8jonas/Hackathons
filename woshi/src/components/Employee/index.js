import React from 'react'

// assets
import HeaderImage from '../../assets/icons/header.png'
import telefone from '../../assets/icons/telefone.png'
import acenar from '../../assets/icons/acenar.png'
import telefonePreto from '../../assets/icons/telefonePreto.png'
import acenar_preto from '../../assets/icons/acenarPreto.png'

// components 

// Functions
import { RectButton } from 'react-native-gesture-handler'

import { Image, StyleSheet, View, Text} from 'react-native'


const Header = ({name, acenarPreto, ligarPreto, image}) => {

    return (
        <View style={style.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={image} resizeMode={"contain"} style={{width: 30, height: 40}} />

                <Text style={style.text}>{name}</Text>
            </View>

            <View style={{flexDirection: 'row', marginRight: 20}}>
                <RectButton style={{marginRight: 4, marginLeft: 4}}>
                    <Image source={acenarPreto ? acenar : acenar_preto} resizeMode={"contain"} style={{width: 25, height: 40}} />
                </RectButton>

                <RectButton style={{marginRight: 4, marginLeft: 4}}>
                    <Image source={ligarPreto ? telefone : telefonePreto} resizeMode={"contain"} style={{width: 25, height: 40}} />
                </RectButton>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
	container: {
		width: '100%', 
		height: 40, 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center', 
    },
    text: {
        fontSize: 18, 
        marginLeft: 15,
    }
})

export default Header