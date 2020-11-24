import React from 'react'

// assets
import HeaderImage from '../../assets/icons/header.png'
import Woshi from '../../assets/icons/woshi.png'
import Close from '../../assets/icons/close.png'

// components 

// Functions
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { Image, StyleSheet, View,} from 'react-native'

const Header = () => {
    const navigation = useNavigation()

  	return (
		<View style={style.container}>
			<View style={style.headerContainer}>
				<RectButton onPress={()=>navigation.openDrawer()}>
					<Image source={HeaderImage} resizeMode={"contain"} style={{width: 25, height: 40}} />
				</RectButton>

				<Image source={Woshi} resizeMode={"contain"} style={{width: 100, height: 40}} />

				<RectButton>
					<Image source={Close} resizeMode={"contain"} style={{width: 25, height: 40}} />
				</RectButton>
			</View>
		</View>
  	)
}

const style = StyleSheet.create({
	container: {
		width: '100%', 
		height: 100, 
		backgroundColor: '#FFF',
	},
	headerContainer: {
		width: '100%', 
		backgroundColor: '#FFF',
		height: 90, 
		paddingTop: 40,
		paddingHorizontal: 20,
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		position: 'relative',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		elevation: 10,
	}
})

export default Header