import React from 'react'

// assets
import HeaderImage from '../../assets/icons/header.png'
import Woshi from '../../assets/icons/woshi.png'
import Close from '../../assets/icons/close.png'

// components 

// Functions
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { Image, Text, View} from 'react-native'


const Header = () => {
    const navigation = useNavigation()

  return (
    <View style={{width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10}}>
        <RectButton onPress={()=>navigation.openDrawer()}>
            <Image source={HeaderImage} resizeMode={"contain"} style={{width: 25, height: 40}} />
        </RectButton>

        <Image source={Woshi} resizeMode={"contain"} style={{width: 100, height: 40}} />

        <RectButton>
            <Image source={Close} resizeMode={"contain"} style={{width: 25, height: 40}} />
        </RectButton>
    </View>
  )
}

export default Header