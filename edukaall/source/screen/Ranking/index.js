import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import avatarRanking from '../../assets/avatarRanking.png'
import presente from '../../assets/presente.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

export function Ranking({navigation, route}) {

    const rankingList = [
        {
            position: 1,
            name: 'Victor Hugo - Turma 43',
            score: 3541,
        },
        {
            position: 2,
            name: 'Jonas H. - Turma 3',
            score: 2508,
        },
        {
            position: 3,
            name: 'Laís  - Turma 16',
            score: 2039,
        },
        {
            position: 4,
            name: 'Ana - Turma 22',
            score: 1970,
        },
        {
            position: 5,
            name: 'Roberta Lopes - Turma 9',
            score: 1650,
        },
        {
            position: 6,
            name: 'Bruno V. - Turma 43',
            score: 1420,
        },
        {
            position: 7,
            name: 'Raquel Muniz - Turma 12',
            score: 320,
        },
        {
            position: 8,
            name: 'Lucas Marques - Turma 11',
            score: 320,
        },
    ]

    return (
        <LinearGradient
            colors={baseGradients.linearBlue.colors}
            style={styles.linearContainer}
            start={baseGradients.linearBlue.start}
            end={baseGradients.linearBlue.end}
        >
            <View style={{height: 50, width: 1}} />

            <ScrollView style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around'}}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(routesPaths.bonus)}>
                        <Image source={presente} style={{ paddingHorizontal: 10, height: 30, width: 30 }} />
                    </TouchableOpacity>
                    <ResponsiveText style={{color: '#FFF', paddingVertical: 10, textAlign: 'center'}} h2 >
                        Ranking Geral
                    </ResponsiveText>
                    <ResponsiveText style={{color: '#FFF', paddingVertical: 10, textAlign: 'center'}} h2 >
                       {'   '}
                    </ResponsiveText>
                </View>

                {rankingList.map((user) => (
                    <RankingComp key={user.position} {...user} />
                ))}

                <View style={{height: 20, width: 1}} />
            </ScrollView>

            <View style={{height: 130, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F8F860'}}>
                <RankingComp name={'Jonas H'} position={'1'} score={'23542'} />
            </View>
        </LinearGradient>
    )
}


function RankingComp({name, position, score }) {

    return (
        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 10}}>
            <ResponsiveText style={styles.text} h1>
                {position}º
            </ResponsiveText>

            <View style={{backgroundColor: '#FFF', borderRadius: 14, width: '80%', flexDirection: 'row', padding: 10, elevation: 2}}>
                <Image source={avatarRanking} style={{ paddingHorizontal: 10, height: 55, width: 55 }} />
                <View style={{marginLeft: 10}}>
                    <ResponsiveText style={{color: '#3A3A3A', }} h4>
                        {name}
                    </ResponsiveText>
                    <ResponsiveText style={{color: '#FF5C00', }} h4 bold>
                        {score} Eduks
                    </ResponsiveText>
                </View>
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
