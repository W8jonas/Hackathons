import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import bonusImg from '../../assets/bonus.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';

export function Bonus() {

    const data = [
        [{
            id: 1, title: '5% OFF - 150 Eduks', text: 'Desconto em mesalidade ativa',
        }, {
            id: 2, title: '10% OFF - 300 Eduks', text: 'Desconto em mesalidade ativa',
        }],
        [{
            id: 3, title: '24% OFF - 800 Eduks', text: 'Qualquer curso livre da plataforma online',
        }, {
            id: 4, title: '30% OFF - 1200 Eduks', text: 'Qualquer curso livre',
        }],
        [{
            id: 5, title: '10% OFF - 1300 Eduks', text: 'Qualquer curso técnico',
        }, {
            id: 6, title: '20% OFF - 2000 Eduks', text: 'Qualquer curso técnico',
        }],
        [{
            id: 7, title: '10% OFF - 2500 Eduks', text: 'Qualquer curso tecnólogo',
        }, {
            id: 8, title: '20% OFF - 3500 Eduks', text: 'Qualquer curso tecnólogo',
        }],
    ]

    return (
        <LinearGradient
            colors={baseGradients.linearBlue.colors}
            style={styles.linearContainer}
            start={baseGradients.linearBlue.start}
            end={baseGradients.linearBlue.end}
        >
            <View style={styles.container}>
                <View style={{height: 50, width: 1}} />

                <ResponsiveText style={{color: '#FFF', textAlign: 'center'}} h4>
                    Resgate seus pontos
                </ResponsiveText>

                <View style={{height: 40, width: 120, borderRadius: 12, marginVertical: 10, backgroundColor: '#F8F8F840', justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                    <ResponsiveText h5 bold style={{color: '#FFF'}}>
                        3541 Eduks
                    </ResponsiveText>
                </View>

                <ScrollView style={{paddingHorizontal: 10}}>
                    {data.map(item => (
                        <View key={item[0].id} style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
                            <BonusComp {...item[0]} />
                            <BonusComp {...item[1]} />
                        </View>
                    ))}
                </ScrollView>

            </View>
        </LinearGradient>
    )
}

function BonusComp({title, text }) {

    return (
        <View style={{width: '100%', alignItems: 'center',  paddingVertical: 10}}>
            <Image source={bonusImg} style={{ paddingHorizontal: 10, height: 82, width: 170 }} />

            <View style={{backgroundColor: '#F8F8F875', borderWidth: 1, borderColor: '#FFF', width: 170, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingHorizontal: 10, paddingBottom: 4 }}>
                <ResponsiveText style={{color: '#FFFFFF', }} p bold>
                    {title}
                </ResponsiveText>
                <ResponsiveText style={{color: '#FFFFFF', }} p>
                    {text}
                </ResponsiveText>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    linearContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
})
