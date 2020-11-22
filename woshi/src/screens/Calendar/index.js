import React from 'react'

// assets
import fundoTelaCalendario from '../../assets/icons/fundoTelaCalendario.png'

// components 
import {Calendar} from 'react-native-calendars'

// Functions

import { ImageBackground, StyleSheet, Text, View, Dimensions} from 'react-native'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')


import {LocaleConfig} from 'react-native-calendars'
import Event from './components/Event'

LocaleConfig.locales['br'] = {
	monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan.','Fev.','Mar','Abr','Maio','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
	dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
	dayNamesShort: ['Dom.', 'Seg.','Ter.','Quar.','Quin.','Sex.','Sab.'],
	today: 'Hoje\'Hj'
}
LocaleConfig.defaultLocale = 'br'

const EVENTS_IN_RANDOM_DAY = [
    {
        id: 1, 
        name: "☠️ Happy Hour tema pirata",
        data: "21/11 às 12:00"
    },
    {
        id: 2, 
        name: "🎉 Aniversário do Lucas",
        data: "21/11 às 18:00"
    },
    {
        id: 3, 
        name: "🤝 Onboarding Jonas",
        data: "28/11 às 13:30"
    },
]


const CalendarScreen = () => {

    return (
		<View style={style.container}>
            <Calendar/>

            <View style={{justifyContent: 'center'}}>
                <View style={style.topicContainer}>
                    <View style={style.ballContainer}>
                        <Text style={{color: "#000", alignSelf: 'center', textAlign: 'center', fontSize: 18}}>4</Text>
                    </View>
                    <Text style={style.title}>
                        Eventos agendados
                    </Text>
                </View>

                <ImageBackground 
                    source={fundoTelaCalendario} 
                    resizeMode="contain" 
                    style={{width: screenWidth*0.5, height: screenWidth*0.5, alignSelf: 'center'}}
                >
                    {EVENTS_IN_RANDOM_DAY.map(item=>(
                        <Event key={item.id} {...item}/>
                    ))}
                </ImageBackground>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 40, right: 50, backgroundColor: "#00C800", width: 50, height: 50, borderRadius: 50}}>
                    <Text style={{position: 'relative', top: -3, fontSize: 50, color: "#FFF",}}>+</Text>
            </View>
		</View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FFF"
    },
    topicContainer: {
        width: '90%',
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft: 20, 
        marginBottom: 15, 
        marginTop: 5, 
        borderBottomColor: "#808080", 
        borderBottomWidth: 0.4,
    },
    ballContainer: {
        marginLeft: 8, 
        width: 25, 
        height: 25, 
        borderRadius: 20, 
        backgroundColor: '#00C2FF', 
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'center', 
        textAlign: 'center', 
        color: "#535353",
        marginTop: -3,
        fontWeight: 'bold', 
        fontSize: 16, 
        fontSize: 22,
        marginLeft: 5, 
    }
})

export default CalendarScreen
