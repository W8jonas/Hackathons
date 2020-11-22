import React from 'react'

// assets

// components 
import { LinearGradient } from 'expo-linear-gradient';

// Functions

import { StyleSheet, Text, View} from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const MURAL_DOS_TIMES = [
    {
        id: Math.random(),
        name: "Time Desenvolvimento",
        number: Math.floor(Math.random() * (10 - 1)) + 1 
    },
    {
        id: Math.random(),
        name: "Time Marketing",
        number: Math.floor(Math.random() * (10 - 1)) + 1 
    },
    {
        id: Math.random(),
        name: "Time Design",
        number: Math.floor(Math.random() * (10 - 1)) + 1 
    },
]


const Teams = () => {
    const navigation = useNavigation()
    return (
		<View style={style.container}>
            <Text style={style.title}>Mural dos times</Text>

            <View style={{paddingHorizontal: 10}}>
                {MURAL_DOS_TIMES.map((item)=>(
                    <LinearGradient 
                        style={style.teamContainer}
                        colors={['#0085FF', '#06EBDD']}
                        start={{ x: 0, y: 0}}
                        end={{ x:1, y: 1}} 
                        key={item.id}
                    >
                        <RectButton style={[style.teamContainer, {paddingHorizontal: 0}]} onPress={()=>{navigation.navigate('Mural')}} >
                            <Text style={style.text}>{item.name} ({item.number}/10) </Text>
                        </RectButton>
                    </LinearGradient>
                ))}
            </View>
		</View>
    )
}


const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFF"
    },
    teamContainer: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 12,
        marginTop: 10, 
        marginBottom: 10
    },
    title: {
		fontSize: 20,
		fontWeight: 'bold',
        color: '#3A3A3A',
        marginLeft: 10, 
        marginTop: 5
	},
    text: {
        fontSize: 18,
        color: '#FFF'
    }
})


export default Teams
