import React from 'react';
import { View, Text, ActivityIndicator,  } from 'react-native';
import { defaultColors } from "../styles";



export default function LoadingScreen() {

	return <View style={{justifyContent: 'flex-end', alignItems: 'center', flex: 1, backgroundColor: defaultColors.backSecondaryColor}}>

		
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>
		<Text style={{fontSize: 30, color: defaultColors.primaryColor, fontWeight: 'bold'}}> CARREGANDO </Text>
		<Text> </Text>
		<ActivityIndicator size={"large"} color={defaultColors.primaryColor}/>
		<Text> </Text>
		<Text> </Text>

	</View>
}

