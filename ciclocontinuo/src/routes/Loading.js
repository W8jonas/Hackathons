import React from 'react';
import { View, Text, ActivityIndicator,  } from 'react-native';
import { defaultColors } from "../styles";
import LottieView from 'lottie-react-native';



export default function LoadingScreen() {

	return <View style={{justifyContent: 'flex-end', alignItems: 'center', flex: 1, backgroundColor: defaultColors.backSecondaryColor}}>

		
		<Text> </Text>
		<Text> </Text>
		<Text> </Text>


		<Text> </Text>
		<Text style={{fontSize: 30, color: defaultColors.primaryColor, fontWeight: 'bold'}}> CARREGANDO </Text>
		<Text> </Text>
		<LottieView source={require('../animations/loading.json')} autoPlay loop style={{height: 200, width: 200}} />
		<Text> </Text>
		<Text> </Text>

	</View>
}

